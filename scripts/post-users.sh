Name="test-name"
USER_ID="shun"
TYPE="sign-up" # sign-up | forgot-password
ID="test-id"

BODY='{"name":"'$Name'"}'

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$BODY" \
  "http://localhost:4004/catalog/Users" | jq
