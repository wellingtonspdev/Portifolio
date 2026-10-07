"""Generate gallery WebP previews; keep the original PNGs for the lightbox.

Requires Pillow. Run from any directory: python scripts/generate-gallery-previews.py
"""
from pathlib import Path
import re
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = (ROOT / 'src/assets').resolve()
OUTPUT = ASSETS / 'previews'
OUTPUT.mkdir(exist_ok=True)
source = (ROOT / 'src/data/projects.ts').read_text(encoding='utf-8')
original_bytes = preview_bytes = 0
dimensions = {}
for name, relative in re.findall(r"import (\w+) from '([.][.]/assets/[^']+[.]png)'", source):
    if name == 'dpLogo':
        continue
    path = (ROOT / 'src/data' / relative).resolve()
    if not path.is_relative_to(ASSETS):
        raise ValueError('Asset outside the expected directory')
    original_bytes += path.stat().st_size
    with Image.open(path) as original:
        dimensions[name] = {}
        for width in (480, 960):
            image = original.convert('RGB')
            image.thumbnail((width, 2000), Image.Resampling.LANCZOS)
            target = OUTPUT / f'{name}-{width}.webp'
            image.save(target, 'WEBP', quality=86, method=6)
            dimensions[name][str(width)] = image.width
            preview_bytes += target.stat().st_size
(OUTPUT / 'dimensions.json').write_text(json.dumps(dimensions, indent=2) + '\n', encoding='utf-8')
print(f'Originals: {original_bytes} bytes; both preview sizes: {preview_bytes} bytes')
