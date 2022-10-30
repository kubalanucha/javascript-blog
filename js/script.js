const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
};
const links = document.querySelectorAll('.titles a');
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
/*generateTitleLinks*/
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorsSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);
  titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';

    /* insert link into titleList */

    /* insert link into HTML variable */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

////generate tags////

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tags = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tags.innerHTML = html;
    /* END LOOP: for every article: */
  }
}
generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* remove class active */
    activeTag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const targetTags = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let targetTag of targetTags) {
    /* add class active */
    targetTag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
  for (let tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

/* GENERATE AUTHORS */

function generateAuthors() {
  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE] find author wrapper */
    const authors = article.querySelector(optArticleAuthorsSelector);
    console.log('"Authors wrapper:" ' + authors);
    console.log('"optArticleAuthorsSelector:" ' + optArticleAuthorsSelector);

    /* [DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get author from data-author attribute */
    const author = article.getAttribute('data-author');
    console.log('"data-author" attribute get from the article: ' + author);

    /* [DONE] generate HTML of the link */
    const linkHTML =
      '<li><a href="#author-' + author + '">' + author + '</a></li>';
    console.log('Generated author HTML code: ' + linkHTML);
    /* [DONE] add generated code to html variable */
    html = html + linkHTML;

    /* [DONE] insert HTML of all the links into the authors wrapper */
    authors.innerHTML = html;

    /* [DONE] END LOOP: for every article: */
  }
}

generateAuthors();

function authorClickHandler(event) {
  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log('Author was clicked!');

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log('clicked author: ' + href);

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const author = href.replace('#author-', '');
  console.log('Author: ' + author);

  /* [DONE] find all tag links with class active */

  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');

  /* [DONE] START LOOP: for each active author link */

  for (let activeAuthor of activeAuthors) {
    /* [DONE] remove class active */

    activeAuthor.classList.remove('active');

    /* [DONE] END LOOP: for each active author link */
  }

  /* [DONE] find all author links with "href" attribute equal to the "href" constant */

  const targetAuthors = document.querySelectorAll('a[href="' + href + '"]');

  /* [DONE] START LOOP: for each found author link */

  for (let targetAuthor of targetAuthors) {
    /* [DONE] add class active */

    targetAuthor.classList.add('active');
    console.log('Target Author: ' + targetAuthor);

    /* [DONE] END LOOP: for each found author link */
  }
}

const addClickListenersToAuthors = function () {
  /* [DONE] find all links to tags */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');

  /* [DONE] START LOOP: for each link */
  for (let authorLink of authorLinks) {
    /* add tagClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
    /* [DONE] END LOOP: for each link */
  }
};

addClickListenersToAuthors();
