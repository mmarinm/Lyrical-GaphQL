import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';
import CreateLyric from './CreateLyric';

class SongDetail extends Component {
    render(){
        const {song} = this.props.data;

        if(!song){
            return <div></div>
        }
        console.log(this.props)
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>{song.title}</h3>
                <CreateLyric />
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => ({ variables: {id: props.params.id}})
})(SongDetail);