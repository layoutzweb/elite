import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class PcRequirements extends React.Component {
  render() {
    return (
      <div className="index-section">
        <div class="container">
            <div class="row">
                <h2 class="text-center">REQUERIMENTOS</h2>
                <div class="col-sm-12 col-md-10 col-md-offset-1 ">
                    <div class="row">
                        <div class="col-sm-5 text-right windows">
                            <h3>WINDOWS</h3>
                            <div class="elite-system-requirements">
                                <h4 class="text-right">Minimum</h4>
                                <p class="text-right">Windows 7, Windows 8
                                    <br /> <span>Quad Core CPU (4x 2GHz)</span>
                                    <br /> <span>4GB RAM</span>
                                    <br /> <span>Nvidia GTX 260 / ATI 4870HD</span>
                                    <br /> <span>7GB Available Space</span>
                                </p>
                            </div>
                            <div class="elite-system-requirements text-right">
                                <h4 class="text-right">Recommended</h4>
                                <p class="text-right">
                                    <span>Windows 7, Windows 8</span>
                                    <br /> <span>Intel Core i7 – 3770K / AMD FX 4350</span>
                                    <br /> <span>8GB RAM</span>
                                    <br /> <span>Nvidia GTX 770 / ATI Radeon R9 280X</span>
                                    <br /> <span>7GB Available Space</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-2 hidden-xs">
                            <h3>&nbsp;</h3>
                            <div class="elite-system-requirements center">
                                <h4>&nbsp;</h4>
                                <p class="text-center">
                                    <span class="datatitles">OS</span>
                                    <br /> <span class="datatitles">CPU</span>
                                    <br /> <span class="datatitles">RAM</span>
                                    <br /> <span class="datatitles">VIDEO</span>
                                    <br /> <span class="datatitles">HDD</span>
                                </p>
                            </div>
                            <div class="elite-system-requirements center">
                                <h4>&nbsp;</h4>
                                <p class="text-center">
                                    <span class="datatitles">OS</span>
                                    <br /> <span class="datatitles">CPU</span>
                                    <br /> <span class="datatitles">RAM</span>
                                    <br /> <span class="datatitles">VIDEO</span>
                                    <br /> <span class="datatitles">HDD</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-5 mac">
                            <h3>MAC</h3>
                            <div class="elite-system-requirements">
                                <h4>Minimum</h4>
                                <p>
                                    <span>OS X Yosemite (version 10.10.3)</span>
                                    <br /> <span>2.3Ghz quad-core Intel Core i5 CPU</span>
                                    <br /> <span>4GB RAM</span>
                                    <br /> <span>Nvidia GT 650M 1GB</span>
                                    <br /> <span>8GB Available Space</span>
                                </p>
                            </div>
                            <div class="elite-system-requirements">
                                <h4>Recommended</h4>
                                <p>
                                    <span>OS X Yosemite (version 10.10.3)</span>
                                    <br /> <span>3.4GHz quad-core Intel Core i7 CPU</span>
                                    <br /> <span>8GB RAM</span>
                                    <br /> <span>GeForce GTX 775M / AMD R9 M290X</span>
                                    <br /> <span>8GB Available Space</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}