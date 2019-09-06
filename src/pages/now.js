import React from 'react'
import Helmet from 'react-helmet'

import { Image, Flex, Box } from 'rebass'
import PageTemplate from '../templates/page'
import Bio from '../components/Bio'

import forestPic from '../assets/forest.jpg'
import {
  FaHeart,
  FaMoon,
  FaFemale,
  FaChild,
  FaCode,
  FaTree,
  FaGem,
} from 'react-icons/fa'

const goodreads = `


      <!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <style type="text/css" media="screen">
  .gr_custom_container_1567802017 {
    /* customize your Goodreads widget container here*/
    border: 0px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: #000000;
  }

  .gr_custom_container_1567802017 img {
    margin-bottom:0;
  }
  .gr_custom_header_1567802017 {
    /* customize your Goodreads header here*/
    // border-bottom: 1px solid gray;
    // width: 100%;
    // margin-bottom: 5px;
    // text-align: center;
    // font-size: 120%
  }
  .gr_custom_each_container_1567802017 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;

    padding: 1em 0;
  }
  .gr_custom_book_container_1567802017 {
    /* customize your book covers here */
    overflow: hidden;
    height: 60px;
      float: left;
      margin-right: 4px;
      width: 39px;


      display:none;
  }
  .gr_custom_author_1567802017 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1567802017 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1567802017 {
    /* customize your rating stars here */
    float: right;
  }
  .gr_custom_review_1567802017 {
    margin: .5em 0;
  }
</style>

    <div id="gr_custom_widget_1567802017">
      <div class="gr_custom_container_1567802017">
        <center>
          <a rel="nofollow" href="https://www.goodreads.com/">
            <img
              alt="goodreads.com"
              style="border:0; margin:0"
              src="https://www.goodreads.com/images/widget/widget_logo.gif"
            />
          </a>
        </center>
      </div>
    </div>
    `

const Now = () => (
  <PageTemplate title="Currently">
    <Helmet>
      <script
        src="https://www.goodreads.com/review/custom_widget/1547141.Taylor's%20Goodreads%20Updates?cover_position=left&cover_size=small&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1567802017&widget_text_color=000000&widget_title_size=medium&widget_width=full"
        type="text/javascript"
        charset="utf-8"
      ></script>
    </Helmet>

    <Flex>
      <Box width={3 / 5} mr={4}>
        <Image src={forestPic} mb={3} />
        <p>
          <FaTree color="green" /> We live in a 1000sqft apartment in Ashland,
          VA, on 10 acres in the woods. Optimizing for freedom to explore over
          luxury housing :).
        </p>
        <p>
          <FaHeart color="red" /> We're homeschooling our kids -- it's been
          amazing.
        </p>
        <p>
          <FaCode /> I'm building{' '}
          <a href="https://projectpoll.co" target="_blank">
            ProjectPoll
          </a>{' '}
          on nights &amp; weekends. <FaMoon color="lightgray" />
        </p>
        <p>
          <FaGem /> I work at a consulting company by day, doing Ruby on Rails
          and React.
        </p>
      </Box>
      <Box width={2 / 5} mt={4} fontSize={'90%'}>
        <div dangerouslySetInnerHTML={{ __html: goodreads }} />
      </Box>
    </Flex>
  </PageTemplate>
)

export default Now
