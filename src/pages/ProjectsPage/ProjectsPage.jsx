import React from 'react';
import Calculator from '../../components/Calculator/Calculator.component';
import './ProjectsPage.styles.scss';

const ProjectsPage = () => {

    return (
        <div>
            <h1>This is my Projects Page</h1>

            <div class="feature">
                <Calculator />
            </div>
        </div>
    );
}

export default ProjectsPage;