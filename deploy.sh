echo "yes"

echo "Changing directory to ~/cupbot"
cd app/zomato-proj-master-shapeai
echo "Pulling from git"
git pull origin master
echo "Yarn'ing"
docker-compose up --build