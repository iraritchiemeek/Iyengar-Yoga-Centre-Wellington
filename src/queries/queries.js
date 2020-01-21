import {graphql} from 'gatsby'

export const noticeContentFragment = graphql`
	fragment NoticeContent on ContentfulNotice {
	    priority
	    retreat {
	      title
	      startDate
	      endDate
	      mainPhoto {
	        fluid {
	          ...GatsbyContentfulFluid
	        }
	      }
	    }
	    textContent {
	      title
	      image {
	        fluid {
	          ...GatsbyContentfulFluid
	        }
	      }
	      content {
	        json
	      }
		}
	}
`

export const pageContentFragment = graphql`
	fragment PageContent on ContentfulPage {
		title
		image {
		  fluid {
		    ...GatsbyContentfulFluid
		  }
		}
		tripleTextColumns {
		  photos {
		    fluid {
		      ...GatsbyContentfulFluid
		    }
		  }
		  title
		  content {
		    json
		  }
		}
		quote {
		  author
		  content {
		    content
		  }
		}
	}
`