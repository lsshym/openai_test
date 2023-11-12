### key 值

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
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
#### 设置 key 值

只有在 cmd 下可以，powershell 和 git bash 不太行
setx OPENAI_API_KEY "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"

echo %OPENAI_API_KEY%
检查是否设置成功



export https_proxy=http://127.0.0.1:7890;export http_proxy=http://127.0.0.1:7890;export all_proxy=socks5://127.0.0.1:7890

curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'