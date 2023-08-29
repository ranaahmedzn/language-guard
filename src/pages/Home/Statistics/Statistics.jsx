import CountUp from 'react-countup';
import Container from '../../../components/Container/Container';
import useThemeContext from '../../../hooks/useThemeContext';
import './Statistics.css'
import ScrollTrigger from 'react-scroll-trigger';
import handleProgress from '../../../Utils/handleProgress';
import { useState } from 'react';

const Statistics = () => {
    const { theme } = useThemeContext();

    let [reward, setReward] = useState(0)
    let [classes, setClasses] = useState(0)
    let [instructors, setInstructors] = useState(0)
    let [students, setStudents] = useState(0)

    const startProgress = () => {
        handleProgress({rewardEnd: 97, reward, setReward}, {classesEnd: 270, classes, setClasses}, {instructorsEnd: 180, instructors, setInstructors}, {studentsEnd: 340, students, setStudents});
    }

    return (
        <div className={`px-4 md:px-0 py-16 md:mt-10 text-white ${theme === 'light' && "bg-[#122033]"}`}>
            <Container>
                <h2 className="text-3xl text-center font-bold mb-20">Our Company Statistics</h2>

                <ScrollTrigger onEnter={() => startProgress()}>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                        <div style={{ background: `conic-gradient(orange ${reward}deg, rgba(192, 192, 192, 0.377) 0deg)` }} className={`circle-box transition-all w-[260px] h-[260px] rounded-full flex gap-3 flex-col justify-center items-center`}>
                            <div className="box-content">
                                <h3 className='text-3xl font-bold'>
                                    <CountUp end={27} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
                                </h3>
                                <p>Awards</p>
                            </div>
                        </div>

                        <div style={{ background: `conic-gradient(orange ${classes}deg, rgba(192, 192, 192, 0.377) 0deg)` }} className='circle-box w-[260px] h-[260px] rounded-full flex gap-3 flex-col justify-center items-center'>
                            <div className="box-content">
                                <h3 className='text-3xl font-bold'>
                                    <CountUp end={200} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />+
                                </h3>
                                <p>Classes</p>
                            </div>
                        </div>

                        <div style={{ background: `conic-gradient(orange ${instructors}deg, rgba(192, 192, 192, 0.377) 0deg)` }} className='circle-box w-[260px] h-[260px] rounded-full flex gap-3 flex-col justify-center items-center'>
                            <div className="box-content">
                                <h3 className='text-3xl font-bold'>
                                    <CountUp end={72} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
                                </h3>
                                <p>Instructors</p>
                            </div>
                        </div>

                        <div style={{ background: `conic-gradient(orange ${students}deg, rgba(192, 192, 192, 0.377) 0deg)` }} className='circle-box w-[260px] h-[260px] rounded-full flex gap-3 flex-col justify-center items-center'>
                            <div className="box-content">
                                <h3 className='text-3xl font-bold'>
                                    <CountUp end={5890} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />+
                                </h3>
                                <p>Students</p>
                            </div>
                        </div>

                    </div>
                </ScrollTrigger>
            </Container>
        </div>
    );
};

export default Statistics;