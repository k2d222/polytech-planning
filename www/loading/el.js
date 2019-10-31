
class Xloading extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({mode: 'open'});
    let html =
      '<svg viewBox="0 0 16 16" style="'+
        'fill:none; stroke-width:2; max-width:100%; height:100%;">'+
          '<circle cx="8" cy="8" r="7" style="'+
          'fill: none;'+
          'stroke-dasharray: 44;'+
          'transform-origin: center;'+
          'animation: ui-loading-dash 2s linear infinite"></circle>'+
      '</svg>';
    let style =
    '  <style>'+
    '    @keyframes ui-loading-dash {'+
    '      from { stroke-dashoffset: 0; }'+
    '      to { stroke-dashoffset: 88; transform: rotate(-360deg); }'+
    '    }'+
    '  </style>';
    shadow.innerHTML = html+style;
  }
}

customElements.define('ui-loading', Xloading);

//
