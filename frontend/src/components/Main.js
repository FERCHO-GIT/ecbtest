import Car from './Car';

function Main(props) {
    return (
        <div className="content">
            { props.data.map(item => <Car data={ item } key={ item.id }/>) }
        </div>
    );
}

export default Main;