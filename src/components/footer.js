import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {fadeIn} from './../animations/m-styled-animations'

import { FaLinkedin } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'
import { Fa500px } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const iconSize = 17;

const Footer = () => {
  return (
	<PageFooter>
		<EmailLink href="mailto:hello@maxmckinney.com">hello@maxmckinney.com</EmailLink>

		<FooterSocialLinks>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank">
					<FaLinkedin size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank">
					<FaMedium size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://500px.com/maxmckinney" target="_blank">
					<Fa500px size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank">
					<FaDribbble size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/timmaxmckinney" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank">
					<FaGithub size={iconSize}/>
				</a>
			</li>
		</FooterSocialLinks>

	</PageFooter>
  )
}

const PageFooter = styled.div`
	display: flex;
    padding: 0px 100px;
    margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-end;
	justify-content: flex-end;
	animation: ${fadeIn} 1.3s;

	@media(max-width: 1155px) {
		padding: 0 24px;
	}
	
	@media(max-width: 715px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		padding: 0 24px;
	}

`;

const EmailLink = styled.a`
	font-size: 1.2rem;
	display: block;
	margin-top: 40px;
	font-weight: 600;
`;

const FooterSocialLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	line-height: 1.9;
	font-size: 1.1rem;
	font-weight: 300;
	justify-content: center;
	width: 100%;
	display: none;
	flex-direction: row;
	li {
		padding: 8px 50px;
	}
	@media(max-width: 715px) {
		display: flex;
		margin-top: 24px;
		li {
			padding: 8px 15px;
		}
	}
}
`;

export default Footer;