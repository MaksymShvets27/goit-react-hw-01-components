import PropTypes from 'prop-types';
import './statistics.css';
const Statistics = (props) => {
    return <section className="statistics">
        {props.title && (<h2 className="title">{props.title}</h2>)}
        <ul className="stat-list">
            {props.stats.map(stat => {
                return <li className="item" key={stat.id}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}</span>
                </li>
            })}
        </ul>
    </section>;
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Statistics;