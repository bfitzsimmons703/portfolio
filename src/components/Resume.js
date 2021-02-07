import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';

import resume from '../assets/resume.pdf';

import '../scss/resume.scss';

function Resume() {
  return (
    <div className="centered">
      <Document className="file" file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
