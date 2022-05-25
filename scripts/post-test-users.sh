Name="test-name"

BODY='{"name":"'$Name'"}'

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$BODY" \
  "http://localhost:4004/test/Users" 
