CODE="9ad05b12-95e6-4d18-bd8d-8facf24ab1cf"
USER_ID="shun"
TYPE="sign-up" # sign-up | forgot-password
ID="test-id"

BODY='{"code":"'$CODE'","id":"'${ID}'"}'

curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$BODY" \
  "http://localhost:4004/Books"
