import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ProjectCard = (props) => {
  return (
	<ProjectCardContainer href={props.data.frontmatter.path}>
		<img src={props.data.frontmatter.image} alt="Project Image"/>
		<ProjectCardContent>
			<h4>{props.data.frontmatter.title}</h4>
			<p>{props.data.frontmatter.projectShortBrief}</p>
			<p class="read">Read more about it</p>
		</ProjectCardContent>
	</ProjectCardContainer>
  )
}

const ProjectCardContainer = styled.a`
	display: grid;
    width: 100%;
    background: #171717;
    border-radius: 4px;
	grid-template-columns: 40% 1fr;
	overflow: hidden;
	height: 300px;
	.recent-project-content {
		grid-column: 2;
		padding: 40px 32px;
		align-self: center;
	}
	img {
		grid-column: 1;
		padding: 0;
		height: 100%;
		object-fit: cover;
	}
	h4 {
		display: inline-block;
		line-height: 32px;
		font-weight: 600;
	}
	p {
		margin-top: 8px;
		margin-bottom: 0px;
		opacity: 0.70;
	}
	.read {
		margin-top: 8px;
		font-weight: 500;
		color: white;
		display: inline-block;
		opacity: 1;
		border-bottom: 1px solid #cecece;
		position: relative;
		transition: opacity $animation-time;
		--accent-color: white;
		&:after {
			content: '';
			position: absolute;
			background: var(--accent-color);
			left: 0;
			right: 100%;
			bottom: -1px;
			height: 1px;
			transition: all $animation-time;
		}
	}
	&:hover {
		opacity: 1;
	}
	&:hover .read:after, &:focus .read:after, &:active .read:after {
		right: 0;
	}
`;

const ProjectCardContent = styled.div`
	grid-column: 2;
	padding: 40px 32px;
	align-self: center;
`;

export default ProjectCard;