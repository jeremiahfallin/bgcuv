import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import AtHomePagePreview from "./preview-templates/AtHomePagePreview";
import AtHomePostPreview from "./preview-templates/SportsPostPreview";
import BoardPagePreview from "./preview-templates/BoardPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import CovidPagePreview from "./preview-templates/CovidPagePreview";
import EventsPagePreview from "./preview-templates/EventsPagePreview";
import EventPostPreview from "./preview-templates/EventPostPreview";
import FormsPagePreview from "./preview-templates/FormsPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import InfoPagePreview from "./preview-templates/InfoPagePreview";
import InvolvementPagePreview from "./preview-templates/InvolvementPagePreview";
import JuniorPagePreview from "./preview-templates/JuniorPagePreview";
import PartnersPagePreview from "./preview-templates/PartnersPagePreview";
import ProgramsPagePreview from "./preview-templates/ProgramsPagePreview";
import SportsPagePreview from "./preview-templates/SportsPagePreview";
import SportsPostPreview from "./preview-templates/SportsPostPreview";
import SummerPagePreview from "./preview-templates/SummerPagePreview";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("at-home", AtHomePagePreview);
CMS.registerPreviewTemplate("at-home-post", AtHomePostPreview);
CMS.registerPreviewTemplate("board", BoardPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("covid", CovidPagePreview);
CMS.registerPreviewTemplate("events", EventsPagePreview);
CMS.registerPreviewTemplate("events-post", EventPostPreview);
CMS.registerPreviewTemplate("forms", FormsPagePreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("info", InfoPagePreview);
CMS.registerPreviewTemplate("involvement", InvolvementPagePreview);
CMS.registerPreviewTemplate("junior", JuniorPagePreview);
CMS.registerPreviewTemplate("partners", PartnersPagePreview);
CMS.registerPreviewTemplate("programs", ProgramsPagePreview);
CMS.registerPreviewTemplate("sports", SportsPagePreview);
CMS.registerPreviewTemplate("sports-post", SportsPostPreview);
CMS.registerPreviewTemplate("summer", SummerPagePreview);

// Pages:
// Index
// At Home
// Get Involved
// Programs
// Club Info
// Who We are
// News
// Sports
