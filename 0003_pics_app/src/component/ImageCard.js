import React, {Component} from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {spans: 0}

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight);
        // yukarda ki calismaz
        // cunku ben burda api' den gelen verinin icinde ki elemana ulasmaya calisiyorum
        // yani henuz yuklenmeyen bir elemana ulasmaya calisiyorum
        // bu yuzden action listener tanımlamam gerekiyor,
        // once yuklenmesini bekliyorum sonra baska bir func ile verileri ele alabiliyorum
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150);
        this.setState({spans});
    }

    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={this.props.alt}
                    src={this.props.src}
                />
            </div>
        );
    }
}

export default ImageCard;