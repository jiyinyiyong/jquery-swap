
bash = require "calabash"

bash.do "develop",
  "pkill -f doodle"
  "coffee -o src/ -wc coffee/"
  "doodle index.html src/"