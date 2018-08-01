cd D:\myFolder\1_TEST_dev\latte_coach_center_build
git checkout %2
rd /s/q D:\myFolder\1_TEST_dev\latte_coach_center_build\static
xcopy D:\myFolder\latte_coach_center_source\dist D:\myFolder\1_TEST_dev\latte_coach_center_build /E/I/Y
git add .
git commit -m %1
git push origin %2
cd D:\myFolder\latte_coach_center_source