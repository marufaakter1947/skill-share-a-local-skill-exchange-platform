import React from 'react';
import useSkills from '../Hooks/useSkills';

const Skills = () => {
    const { skills, loading } = useSkills();
    return (
        <div>
            {skills.length} skills loaded
        </div>
    );
};

export default Skills;