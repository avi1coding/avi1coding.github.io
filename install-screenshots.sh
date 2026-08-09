
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/images"
MAXW=1600

NAMES=(
  "blazes-game"
  "blazes-home"
  "blazes-achievements"
  "blazes-level"
  "blazes-stats"
  "blazes-pricing"
)

DESCRIPTIONS=(
  "in-game question screen"
  "Home / Quick Actions"
  "Achievements"
  "Level / profile"
  "Analytics"
  "Plans & Pricing"
)

mkdir -p "$OUT"

if [ "$#" -eq 1 ] && [ -d "$1" ]; then
  IFS=$'\n' read -r -d '' -a FILES < <(
    find "$1" -maxdepth 1 -type f \
      \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | sort && printf '\0'
  )
else
  FILES=("$@")
fi

if [ "${#FILES[@]}" -eq 0 ]; then
  echo "No files given."
  echo
  echo "Expected order:"
  for i in "${!NAMES[@]}"; do
    printf "  %d. %-24s -> %s.png\n" "$((i + 1))" "${DESCRIPTIONS[$i]}" "${NAMES[$i]}"
  done
  exit 1
fi

if [ "${#FILES[@]}" -ne 6 ]; then
  echo "Warning: got ${#FILES[@]} file(s), expected 6. Installing what was given."
  echo
fi

for i in "${!FILES[@]}"; do
  [ "$i" -ge "${#NAMES[@]}" ] && break

  SRC="${FILES[$i]}"
  DEST="$OUT/${NAMES[$i]}.png"

  if [ ! -f "$SRC" ]; then
    echo "  skip  ${NAMES[$i]}.png  (not found: $SRC)"
    continue
  fi

  cp "$SRC" "$DEST"

  # sips ships with macOS; resize only if the image is wider than MAXW.
  WIDTH=$(sips -g pixelWidth "$DEST" 2>/dev/null | awk '/pixelWidth/{print $2}')
  if [ -n "${WIDTH:-}" ] && [ "$WIDTH" -gt "$MAXW" ]; then
    sips --resampleWidth "$MAXW" "$DEST" >/dev/null 2>&1
    echo "  ok    ${NAMES[$i]}.png  (${DESCRIPTIONS[$i]}, resized ${WIDTH} -> ${MAXW}px)"
  else
    echo "  ok    ${NAMES[$i]}.png  (${DESCRIPTIONS[$i]})"
  fi
done

echo
echo "Installed into images/. Reload index.html to see them."
