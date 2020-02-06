import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import EventsPagePreview from "./preview-templates/EventsPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import InfoPagePreview from "./preview-templates/InfoPagePreview";
import InvolvementPagePreview from "./preview-templates/InvolvementPagePreview";
import ProgramsPagePreview from "./preview-templates/ProgramsPagePreview";
import SportsPagePreview from "./preview-templates/SportsPagePreview";
import SportsPostPreview from "./preview-templates/SportsPostPreview";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("events", EventsPagePreview);
CMS.registerPreviewTemplate("events-post", EventPostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("info", InfoPagePreview);
CMS.registerPreviewTemplate("involvement", InvolvementPagePreview);
CMS.registerPreviewTemplate("programs", ProgramsPagePreview);
CMS.registerPreviewTemplate("sports", SportsPagePreview);
CMS.registerPreviewTemplate("sports-post", SportsPostPreview);

// Pages:
// Index
// Get Involved
// Programs
// Club Info
// Who We are
// News
// Sports
