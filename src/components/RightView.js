import React, { Component } from 'react';
import {PageHeader, Panel , Row , Col , Button} from 'react-bootstrap'

export const DownloadLink = ({url , name}) => (
    <div><a href={url} target="_blank" rel="noopener noreferrer" download><h4>{name}</h4></a></div>
  )
export const PanelView = ({title , body , button}) => (
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">{title}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>{
                            body.split('\n').map((item , index) => (
                                <div key={item}><h4>{item}</h4></div>
                            ))
                        }
                        {button}
                        </Panel.Body>
                    </Panel>
)
class RightView extends Component {
    render() {
        const id = this.props.match.params.id
        return (
            <div>
                {this.renderSwitch(id)}
            </div>
        )
    }
    
    renderSwitch = (key) => {
        switch (key) {
            case '建造執照申請':
                return (
                    <React.Fragment>
                    <PageHeader>
                        {key}
                    </PageHeader>
                <Row className="show-grid">
                <Col xs={12} md={6}>
                    <PanelView title="壹、目的：" body="為利民眾申請建照，以加速建照核發速度。" />
                </Col>
                <Col xs={12} md={6}>
                    {/* <PanelView title="貳、相關法令及規定：" body={<>
                        一、 建築法第三十四條。<br />二、 新北市建築管理規則。<br />三、 山坡地建築管理辦法。 </>
                    } */}
                    <PanelView title="貳、相關法令及規定：" body={
                        `一、 建築法第三十四條。
                        二、 新北市建築管理規則。
                        三、 山坡地建築管理辦法。`
                    }
                    />
                </Col>
                </Row>
                <Row>
                <Col sm={12} md={12}>
                <PanelView title="參、民眾應附證件、書表、表單、附件： " body="
一、建造執照申請書、雜項執照申請書、變更設計申請書(請至全國建築管理資訊系統入口網http://cpabm.cpami.gov.tw/index.jsp下載表單)。
二、建築物(增建、變更設計)概要表。(同上項) 
三、起造人名冊。（起造人二人以上時檢附）(同第一項) 
四、委託書。(同第一項)
五、建築師簽證表。(同第一項) 
六、建造執照（變更設計）設計建築師簽證負責項目表。(如附件) 
七、屬公共建築物者應檢附無障礙培訓講習證書。(97年7月1日以後之培訓證書) 
八、建築師簽證案件自主檢查表。(如附件) 
九、建築物結構與設備專業技師簽證報告。(如附件) 
十、結構抽查項目表。(如附件) 
十一、地籍圖謄本或土地所有權狀影本（載明與正本相符）。 
十二、土地登記(簿)謄本(第一類)或土地所有權狀影本（載明與正本相符）。 
十三、土地使用權同意書。(同第一項) 
十四、原有合法建築物證明文件(正本)。 
十五、雜項使用執照及基本圖說。 
十六、申請基地相片。 
十七、基地四周地籍套繪圖。(另檢附光碟資料) 
十八、建造執照正本。（變更設計時檢附） 
十九、使用共同壁協定書。(同第一項) 
二 十、拆除執照申請書。(同第一項) （併案辦理拆照時檢附） 
二十一、拆除同意書(如附件)及建築物權利證明（建物登記謄本或合法房屋證明文件）。（如有共同壁檢附拋棄書）（併案辦理拆照時檢附） 
二十二、建築物拆除位置、平面、立面圖。（併案辦理拆照時檢附） 
二十三、違章建物自行拆除切結書。（併案辦理拆照時檢附）(如附件) 
二十四、建築線指定圖或免指示（定）建築線證明文件。
二十五、公寓大廈住戶規約草約。(3戶以上(含3戶)需檢附) 
二十六、專有、共用、約定專用、約定共用標示之詳圖。(無者免附) 
二十七、都市計畫文件。(無者免附) 
二十八、原住民族委員會同意函。(屬原住民保留地者需檢附) 
二十九、實施環境影響評估文件（或免實施環境影響說明書）。 
三 十、水土保持計畫文件。(位於山坡地者需檢附） 
三十一、建造執照加強山坡地建築管理與技術規範檢核表。(位於山坡地者需檢附） 
三十二、山坡地雜或雜併建照申請案加強查核表。(105.6.28起掛號案件者應檢附)
三十三、環境地質圖、山崩潛感圖、土地利用潛力圖。（均須將基地按比例套繪）
三十四、有無位於地質敏感區查詢結果。(列印查詢結果)
三十五、經審查通過之基地地質調查及地質安全評估結果報告及證明文件。(位於地質敏感區者需檢附)
三十六、擋土設施與主體建築共構剖面圖。(擋土設施與主體建築共構者檢附、擋土牆高度超過6公尺者送外審)
三十七、雨水貯留滯洪及涵養水分再利用相關設施設計書件。
三十八、綠建築專章檢討設計資料。
三十九、施工說明書。
四 十、工程設計圖。（建築法第32條規定之建築物工程圖樣及說明書）
四十一、下水道設置申請書圖。
四十二、消防審查核准證明文件。
四十三、室內裝修申請書及圖說。
四十四、都市設計審議通過文件。（屬土管要點第13條規定者應檢附）
四十五、結構計算書。
四十六、鑽探報告書。
四十七、其他相關（證明）文件資料。" />
                
                </Col>
              </Row>
              <Row>
                  <Col xs={6} md={6}>
                  {/* <PanelView title="肆、作業內容： " body="流程圖說明：如後附件。" /> */}
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">肆、作業內容：</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>流程圖說明：如後附件。
                            <DownloadLink url="https://www.wratb.gov.tw/media/1861/建造執照-變更設計-設計建築師簽證負責項目表.pdf" name="建造執照（變更設計）設計建築師簽證負責項目表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1860/建築師簽證案件自主檢查表.pdf" name="建築師簽證案件自主檢查表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1859/建築物結構與設備專業技師簽證報告.pdf" name="建築物結構與設備專業技師簽證報告.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1858/結構抽查項目表.pdf" name="結構抽查項目表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1857/拆除同意書.pdf" name="拆除同意書.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1856/違章建物自行拆除切結書.pdf" name="違章建物自行拆除切結書.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1855/加強山坡地建築管理與技術規範檢核表.pdf" name="加強山坡地建築管理與技術規範檢核表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1854/公寓大廈規約草約.pdf" name="公寓大廈規約草約.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1853/建造執照作業流程圖.pdf" name="建造執照作業流程圖.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1852/山坡地雜或雜併建照申請案加強查核表.pdf" name="山坡地雜或雜併建照申請案加強查核表.pdf" />
                        </Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={6} md={6}>
                  {/* <PanelView title="檔案下載" body={<DownloadButton clickHandler={()=>{
                                console.log("clickHandler")
                            }} />} /> */}
                  </Col>
              </Row>
              </React.Fragment>)
                
            case '拆除執照申請':
                return <>
                    <PageHeader>
                        {key}
                    </PageHeader>
                    <Row>
                        <Col xs={12} md={6}>
                            <PanelView title="壹、目的：" body="為落實行政與技術分立，特訂定本標準作業程序，以制度化、透明化縮短 核照時程，提昇行政效率。" />
                        </Col>
                        <Col xs={12} md={6}>
                        <PanelView title="貳、相關法令及規定： " body="一、建築法及其相關規定。 
二、新北市建築管理規則及其相關規定。 
三、建築物結構設備專業工程技師簽證規則。" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                        <PanelView title="參、民眾應附證件、書表、表單、附件： " body="一、拆除執照申請書。 (如附件) 
二、申請人名冊。 (如附件)
三、申請基地照片。(包含門牌) 
四、委託書。(非設計人本人洽辦時檢附) (如附件)
五、違章建物自行拆除切結書。(如附件) 
六、地籍圖謄本。
七、土地登記謄本。（按地號次序排列） 
八、建築物權利證明。（建物登記簿謄本或合法房屋證明文件） 
九、拆除同意書。（如有共同壁者檢附拋棄書）(如附件) 
十、建築物拆除位置、平面、立面圖。(含計算式) "  />
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col xs={12} md={6}>
                            <PanelView title="肆、作業內容： " body="流程說明：如後附件。" />
                        </Col> */}
                        <Col xs={12} md={6}>
                            <Panel bsStyle="primary">
                                <Panel.Heading>
                                <Panel.Title componentClass="h3">肆、作業內容：</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>流程圖說明：如後附件。
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1861/建造執照-變更設計-設計建築師簽證負責項目表.pdf" name="建造執照（變更設計）設計建築師簽證負責項目表.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1860/建築師簽證案件自主檢查表.pdf" name="建築師簽證案件自主檢查表.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1859/建築物結構與設備專業技師簽證報告.pdf" name="建築物結構與設備專業技師簽證報告.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1858/結構抽查項目表.pdf" name="結構抽查項目表.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1857/拆除同意書.pdf" name="拆除同意書.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1856/違章建物自行拆除切結書.pdf" name="違章建物自行拆除切結書.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1855/加強山坡地建築管理與技術規範檢核表.pdf" name="加強山坡地建築管理與技術規範檢核表.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1854/公寓大廈規約草約.pdf" name="公寓大廈規約草約.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1853/建造執照作業流程圖.pdf" name="建造執照作業流程圖.pdf" />
                                    <DownloadLink url="https://www.wratb.gov.tw/media/1852/山坡地雜或雜併建照申請案加強查核表.pdf" name="山坡地雜或雜併建照申請案加強查核表.pdf" />
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </>
            default:
                break;
        }
        return <PageHeader>
        {key}
      </PageHeader>;
    }
}
export default RightView