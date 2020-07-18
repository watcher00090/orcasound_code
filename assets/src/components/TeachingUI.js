import React, {Component} from 'react'

import {gql} from 'apollo-boost'
import {Query} from 'react-apollo'

import Player from './Player'
import Header from './Header'
import FeedList from './FeedList'
import FeedPage from './FeedPage'

import 'styles/home.scss'

export default class Home extends Component {
  state = {}

  componentDidMount() {
    if (['beta', 'dev', 'staging'].indexOf(ENV.ENV_NAME) >= 0) {
      document.title = `Orcasound ${ENV.ENV_NAME}`
    } else {
      document.title = `Orcasound`
    }
  }

  changeFeed = currentFeed => this.setState({currentFeed, autoplay: true})

  render() {
    const {feedSlug} = this.props.match.params

    return (
      <div className="teachingUI">
        <div className="content container">
          {!feedSlug && (
            <div className="teachingUI-content">
              <h1 className="my-4">Listen to S0, S1, S2, ... , Orca Calls!</h1>

              <audio controls>
                <source
                  src="http://www.orcasound.net/data/product/SRKW/greatest-hits/orcasite-4min-sample.ogg"
                  type="audio/ogg"
                />
                <source
                  src="http://www.orcasound.net/data/product/SRKW/greatest-hits/orcasite-4min-sample.mp3"
                  type="audio/mpeg"
                />
              </audio>
              <p>
                Launched in November, 2018, the Orcasound app makes it easy for
                everyone to listen for whales. We welcome feedback about your
                listening experience via this{' '}
                <a href="https://goo.gl/forms/tgi4zoEDOFf5zQRJ3" target="_blank">
                  user experience survey
                </a>. If you have trouble, try reloading the site after clearing
                your browser's cache.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
