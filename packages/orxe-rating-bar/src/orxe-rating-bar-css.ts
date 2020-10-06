import {css} from 'lit-element';

export default css`
    :host{
        --rating-bar-donut-rating-info-font-size:  1.4rem;
        --rating-bar-donut-track-stroke-color:  #E1E6ED;
        --rating-bar-donut-margin:  var(--spacing-03);
        --rating-bar-excellent:  #238738;
        --rating-bar-great:  #67AB04;
        --rating-bar-average:  #D99B22;
        --rating-bar-poor:  #D97322;
        --rating-bar-bad:  #D9222A;

        --rating-bar-linear-rating-info-font-size:  1.6rem;
        --rating-bar-linear-track-padding:  var(--spacing-03);

        --rating-bar-background-color:  #E1E6ED;
        --rating-bar-font-family:  var(--global-font-family);
        --rating-bar-font-weight:  var(--font-weight-semi-bold);
        --rating-bar-label-color:  #242C38;
    }

    :host([type='donut']) {
        display: inline-flex
    }
    
    :host([type='donut']) .donut-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: var(--rating-bar-donut-margin)
    }
    
    :host([type='donut']) .donut-track__info {
        position: absolute
    }
    
    .donut{
        position:relative;
        transform:rotate(-90deg)
    }
    .donut .donut-track{
        stroke:var(--rating-bar-donut-track-stroke-color);
        fill:none;
        stroke-width:4
    }
    .donut .donut-track__indicator{
        fill:none;stroke-width:4;
        stroke-dasharray:113.04
    }
    .donut .donut-track__indicator.donut-track--excellent{
        stroke:var(--rating-bar-excellent)
    }
    .donut .donut-track__indicator.donut-track--great{
        stroke:var(--rating-bar-great)
    }
    .donut .donut-track__indicator.donut-track--average{
        stroke:var(--rating-bar-average)
    }
    .donut .donut-track__indicator.donut-track--poor{
        stroke:var(--rating-bar-poor)
    }
    .donut .donut-track__indicator.donut-track--bad{
        stroke:var(--rating-bar-bad)
    }
    .donut-track__info{
        position: absolute;
        color: var(--rating-bar-label-color);
        font-family: var(--rating-bar-font-family);
        font-weight: var(--rating-bar-font-weight);
        font-size: var(----rating-bar-donut-rating-info-font-size);
    }
    
    :host([type='linear']){
        display:block;
        width:100%
    }
    .linear-track{
        background-color:var(--rating-bar-background-color);
        border-radius:25px;
        width:100%
    }
    .linear-track .linear-track__indicator{
        border-radius:25px;
        height:8px;
        margin-bottom:var(--rating-bar-linear-track-padding)
    }
    .linear-track .linear-track__indicator.linear-track--excellent{
        background-color:var(--rating-bar-excellent)
    }
    .linear-track .linear-track__indicator.linear-track--great{
        background-color:var(--rating-bar-great)
    }
    .linear-track .linear-track__indicator.linear-track--average{
        background-color:var(--rating-bar-average)
    }
    .linear-track .linear-track__indicator.linear-track--poor{
        background-color:var(--rating-bar-poor)
    }
    .linear-track .linear-track__indicator.linear-track--bad{
        background-color:var(--rating-bar-bad)
    }
    .linear-track__info{
        color:var(--rating-bar-label-color);
        font-family:var(--rating-bar-font-family);
        font-weight:var(--rating-bar-font-weight);
        display:flex;
        justify-content:space-between;
        font-size:var(--rating-bar-linear-rating-info-font-size)
    }
    `;