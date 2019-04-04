import React from 'react'
import { Image, Link } from 'gatsby'
import Tag from './Tag'
import Date from './Date'
import injectsheet from 'react-jss'

const styles = {
  container: {
    composes: 'p-inner',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
    },
  },
  flexInner: {
    width: 'calc( 100% - 76px )',
  },
  tagInner: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: '1.6em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  thumbnail: {
    width: 60,
    height: 60,
    backgroundColor: '#cccccc',
    borderRadius: 4,
    textAlign: 'center',
    lineHeight: '60px',
  },
}

const Card = props => {
  const {
    content: {
      frontmatter: { tags },
    },
    classes,
  } = props

  return (
    <Link to={props.content.fields.slug} className={classes.container}>
      <div style={styles.thumbnail} />
      <div style={styles.flexInner}>
        <h3 className="c-ttl" style={styles.title}>
          {props.content.frontmatter.title}
        </h3>
        <div style={styles.inner}>
          <div style={styles.tagInner}>
            {tags && tags.map(tag => <Tag tag={tag.toUpperCase()} />)}
          </div>
          <Date content={props.content.frontmatter.date} />
        </div>
      </div>
    </Link>
  )
}

export default injectsheet(styles)(Card)
