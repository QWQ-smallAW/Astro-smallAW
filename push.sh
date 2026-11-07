#!/usr/bin/env bash
# 一键提交并推送：./push.sh "提交说明"
# 用法示例：./push.sh "feat: 新增文章 xxx"
set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo '用法: ./push.sh "提交说明"'
  echo '示例: ./push.sh "feat: 新增文章 my-first-post"'
  exit 1
fi

# 确认在 main 分支，避免把改动推到意外分支
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
  echo "⚠ 当前在 $BRANCH 分支（非 main），确认要推这个分支吗？5 秒内按 Ctrl+C 取消"
  sleep 5
fi

git add -A

# 没有实际改动时跳过 commit，直接 push 同步
if git diff --cached --quiet; then
  echo "没有需要提交的改动，尝试直接 push..."
else
  git commit -m "$MSG"
fi

echo "--- 推送到远程 ---"
git push
echo "✓ 完成：$(git log --oneline -1)"
