const handleProgress = ({rewardEnd, reward, setReward}, {classesEnd, classes, setClasses}, {instructorsEnd, instructors, setInstructors}, {studentsEnd, students, setStudents} ) => {

    let rewardProgress = setInterval(() => {
        if (reward <= rewardEnd) {
            setReward(reward++)
        }
        if (reward >= rewardEnd) {
            clearInterval(rewardProgress);
            console.log("Successfully stopped!")
        }
    }, 18)

    let classesProgress = setInterval(() => {
        if (classes <= classesEnd) {
            setClasses(classes++)
        }
        if (classes >= classesEnd) {
            clearInterval(classesProgress);
            console.log("Successfully stopped!")
        }
    }, 6)

    let instructorsProgress = setInterval(() => {
        if (instructors <= instructorsEnd) {
            setInstructors(instructors++)
        }
        if (instructors >= instructorsEnd) {
            clearInterval(instructorsProgress);
            console.log("Successfully stopped!")
        }
    }, 9)

    let studentsProgress = setInterval(() => {
        if (students <= studentsEnd) {
            setStudents(students++)
        }
        if (students >= studentsEnd) {
            clearInterval(studentsProgress);
            console.log("Successfully stopped!")
        }
    }, 4.8)
}

export default handleProgress;