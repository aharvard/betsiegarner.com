import CMS from "netlify-cms";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import BioPagePreview from "./preview-templates/BioPagePreview";
import CVPagePreview from "./preview-templates/CVPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("bio", BioPagePreview);
CMS.registerPreviewTemplate("cv", CVPagePreview);
