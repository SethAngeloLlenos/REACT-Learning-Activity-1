class SlotMachine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            r1: '',
            r2: '',
            r3: '',
            message: '',
        };
    }


    spin = () => {
        // Generate random values for s1, s2, and s3
        const symbols = [this.props.s1, this.props.s2, this.props.s3];
        const randomS1 = symbols[Math.floor(Math.random() * symbols.length)];
        const randomS2 = symbols[Math.floor(Math.random() * symbols.length)];
        const randomS3 = symbols[Math.floor(Math.random() * symbols.length)];
    
        // Check for a win
        let message = randomS1 === randomS2 && randomS2 === randomS3 ? "Winner!" : "Loser!";
    
        this.setState({
            r1: randomS1,
            r2: randomS2,
            r3: randomS3,
            message,
        });
    };

    render() {
        const { s1, s2, s3 } = this.props;
        const symbols = [s1, s2, s3];
        const { r1, r2, r3, message } = this.state;
        return (
            <div>
            <h1>Slot Machine</h1>
            <div>
                <p>
                    Hello, this is a cherry, {s1}!
                    This is a lemon, {s2}!
                    And this is a tangerine, {s3}!
                </p>
                <h3>
                    Get three of any to WIN! Keep Clicking!
                </h3>
            </div>
            <button onClick={this.spin}>Spin</button>
             <h1>{r1}    {r2}   {r3}</h1>
             <h1>Result {message}</h1>
          </div>
        );
    }
}