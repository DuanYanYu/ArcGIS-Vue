import WebTileLayer from "@arcgis/core/layers/WebTileLayer"
import Extent from "@arcgis/core/geometry/Extent";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";

/**
 * 加载天地图,构造器不传参数type只加载地图,传参时加载注记;
 */

export default class TDTlayer extends WebTileLayer {

  readonly spatialReference = new SpatialReference({wkid:4326});
  private layerUrl: string = "http://t3.tianditu.gov.cn";
  private tk:string;  //天地图密钥
  private mapType:string = "img_c";

  constructor(tk: string, mapType: string) {
    super({
      urlTemplate: new URL("http://t3.tianditu.gov.cn", location.href).toString()
    });
    this.urlTemplate = this.layerUrl;
    this.title="tdt"
    this.tk=tk
    this.mapType=mapType
    this.fullExtent= new Extent({
      spatialReference: this.spatialReference,
      xmax:180.0,
      ymax:90.0,
      xmin:-180.0,
      ymin:-90.0
    });

    this.tileInfo = new TileInfo({
     "origin" : {
        "x" : -180,
        "y" : 90
      },
      "spatialReference" : {
        "wkid" : 4326
      },
      "lods" : [
        {"level" : 2, "resolution" : 0.3515625, "scale" : 147748796.52937502},
        {"level" : 3, "resolution" : 0.17578125, "scale" : 73874398.264687508},
        {"level" : 4, "resolution" : 0.087890625, "scale" : 36937199.132343754},
        {"level" : 5, "resolution" : 0.0439453125, "scale" : 18468599.566171877},
        {"level" : 6, "resolution" : 0.02197265625, "scale" : 9234299.7830859385},
        {"level" : 7, "resolution" : 0.010986328125, "scale" : 4617149.8915429693},
        {"level" : 8, "resolution" : 0.0054931640625, "scale" : 2308574.9457714846},
        {"level" : 9, "resolution" : 0.00274658203125, "scale" : 1154287.4728857423},
        {"level" : 10, "resolution" : 0.001373291015625, "scale" : 577143.73644287116},
        {"level" : 11, "resolution" : 0.0006866455078125, "scale" : 288571.86822143558},
        {"level" : 12, "resolution" : 0.00034332275390625, "scale" : 144285.93411071779},
        {"level" : 13, "resolution" : 0.000171661376953125, "scale" : 72142.967055358895},
        {"level" : 14, "resolution" : 8.58306884765625e-005, "scale" : 36071.483527679447},
        {"level" : 15, "resolution" : 4.291534423828125e-005, "scale" : 18035.741763839724},
        {"level" : 16, "resolution" : 2.1457672119140625e-005, "scale" : 9017.8708819198619},
        {"level" : 17, "resolution" : 1.0728836059570313e-005, "scale" : 4508.9354409599309},
        {"level" : 18, "resolution" : 5.3644180297851563e-006, "scale" : 2254.4677204799655}
      ]
    });

    this.load();

  }

  getTileUrl(level: number, row: number, col: number) {
      return "http://t" + row % 8 + ".tianditu.gov.cn/"+ this.mapType +"/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&TILEMATRIX=" + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles&tk="+this.tk+"";
  }
}
