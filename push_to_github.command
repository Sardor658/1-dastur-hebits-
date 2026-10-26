#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "=================================================="
echo "🚀 Habit Tracker PRO ni GitHub ga yuklash"
echo "Repository: https://github.com/Sardor658/1-dastur-hebits-.git"
echo "=================================================="
echo ""

git config credential.helper osxkeychain
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Barcha fayllar muvaffaqiyatli GitHub ga yuklandi!"
    echo "🔗 GitHub havolangiz: https://github.com/Sardor658/1-dastur-hebits-"
else
    echo ""
    echo "⚠️ Eslatma: GitHub paroli o'rniga Personal Access Token (PAT) so'rashi mumkin."
    echo "Token olish: https://github.com/settings/tokens (repo huquqini belgilang)"
fi

echo ""
read -p "Darchani yopish uchun Enter bosing..."
