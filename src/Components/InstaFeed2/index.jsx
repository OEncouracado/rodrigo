import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import "./style.css"

function InstagramFeed() {
  const widgetHTML = '<!-- LightWidget WIDGET --><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/535d5fbc91ff5412abbe69525b01faab.html" scrolling="yes" allowtransparency="true" class="lightwidget-widget framedinsta" style="width:100%;border:0;height:100%;overflow:hidden;"></iframe>';

  return (
    <div>
      {ReactHtmlParser(widgetHTML)}
    </div>
  );
}

export default InstagramFeed;
