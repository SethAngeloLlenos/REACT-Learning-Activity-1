
class App extends React.Component {
    render() {
        return (
            <div>
                <SlotMachine
                    s1= "🍒"
                    s2 = "🍋"
                    s3 = "🍊"
                />
            </div> //hello would be used twice
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));