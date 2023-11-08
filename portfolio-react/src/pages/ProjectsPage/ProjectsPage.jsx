import React from 'react';
import Calculator from '../../components/Calculator/Calculator.component';

const ProjectsPage = () => {

    return (
        <div>
            <h1>This is my Projects Page</h1>

            <div class="feature">
                <h1>Basic Calculator</h1>
                <Calculator />
            </div>
        </div>
    );
}

export default ProjectsPage;