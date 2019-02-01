import React, { Component } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    height: 130px;
    width: auto;
`

const Logo3K = styled.img`
    height: 37px;
    width: auto;
`

export default class LogoIT3K extends Component {
	render() {
		return (
            <div>
            <div className="d-flex justify-content-center">
                <Logo className="mt-2" src="static/img/logoIT3K.svg" alt="Logo IT3K #16" />
            </div>
            <div className="mt-3 d-flex justify-content-center">
                <Logo3K src="static/img/3k.png" alt="3k" />
            </div>
            </div>
		);
	}
}