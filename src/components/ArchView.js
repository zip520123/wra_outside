import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom'
import { BannerView } from './HomePage.js'
import GoBackView from './GoBackView'
import { DivLink ,ABlank} from './ListBlock'
import {PageHeader, Panel , Row , Col } from 'react-bootstrap'
import {PanelView , DownloadLink} from './RightView'
class ArchView extends Component {
    clickHandler = (e) => {
        this.props.history.goBack()
    }
    render() {
        return (<>
            <Route path={`${this.props.match.path}/:topicId`} component={this.topicIdLayer} />
            <Route
                exact
                path={this.props.match.path}
                render={this.defaultLayer}
            />
        </>)
    }
    div33widthStyle = {width : '33%',float: 'left',height: '100%'}
    centerTextStyle = {
        position: 'relative',
        transform: 'translateY(-50%)',
        top: '50%',
        margin: '0px',
        textAlign: 'center'
    }
    cellStyle = {
        width: '100%',
        height : '24%',
        backgroundColor:'#2c4e4c',
        color:'white',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#d1c0a6',
        padding : '20px',
        marginTop: '10px',
        marginLeft: '10px',
        marginRight: '0px',
        marginBottom: '10px',
    }
    defaultLayer = () => {
        return <><div style={this.div33widthStyle}>
        <DivLink name="建築管理-建築管理" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
        <DivLink name="建築管理-施工管理" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
        <DivLink name="建築管理-使用管理" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
        <DivLink name="建築管理-其他項" match={this.props.match} cellStyle={this.cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
        </div>
        <BannerView />
        <GoBackView clickHandler={this.clickHandler}></GoBackView>
    </>
    }
    topicIdLayer = ({match})=>{
        const id = match.params.topicId
        var cellStyle = {...this.cellStyle , height : '15.5%'} 
        switch (id) {
            case '建築管理-建築管理':
            cellStyle = {...this.cellStyle , height : '15.5%'} 
            return (
                <><div style={this.div33widthStyle}>
                    <DivLink name="建造執照申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="拆除執照申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="招牌廣告及樹立廣告許可申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="現有巷道認定申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="建築線申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="無障礙生活環境宣導專頁" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                </div>
                <BannerView />
                <GoBackView clickHandler={this.clickHandler}></GoBackView>
                </>
              );
            
            case '建築管理-施工管理':
            cellStyle = {...this.cellStyle , height : '19%'} 
            return (
                <><div style={this.div33widthStyle}>
                    <DivLink name="施工勘驗（放樣申報）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="施工勘驗（開工申報）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="施工勘驗（各層施工勘驗）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="變更起、承、監造人申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="開工、竣工展期申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                </div>
                <BannerView />
                <GoBackView clickHandler={this.clickHandler}></GoBackView>
                </>
              );
            case '建築管理-使用管理':
            cellStyle = {...this.cellStyle , height : '7.2%'} 
            return (
                <><div style={this.div33widthStyle}>
                    <DivLink name="室內裝修許可（竣工查驗）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="室內裝修許可（書面審查）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="變更使用執照申請（竣工查驗）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="變更使用執照申請（書面審查）" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="建築物使用項目更動報備" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="建築物分（併）戶申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="機械遊樂設施檢查申報" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="建築物公共安全檢查申報" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="使用執照遺失、補發" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="使用執照存根申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="使用執照申請" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="使用執照更正" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                </div>
                <BannerView />
                <GoBackView clickHandler={this.clickHandler}></GoBackView>
                </>
              );
            case '建築管理-其他項':
            cellStyle = {...this.cellStyle , height : '19%'} 
            return (
                <><div style={this.div33widthStyle}>
                    <DivLink name="土地使用分區證明" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="執照圖說影印" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="公有畸零地合併使用證明" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="法定空地分割" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                    <DivLink name="合法房屋證明" match={this.props.match} cellStyle={cellStyle} centerTextStyle={this.centerTextStyle}></DivLink>
                </div>
                <BannerView />
                <GoBackView clickHandler={this.clickHandler}></GoBackView>
                </>
              );
            case '建造執照申請':
            return (
                <div className='marginWrap'>
                
                <React.Fragment>
                <PageHeader>
                    {id} <small onClick={this.clickHandler}>回上一頁</small>
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
          </React.Fragment></div>)
          case '拆除執照申請':
          return <div className='marginWrap'>
                    <PageHeader>
                        {id} <small onClick={this.clickHandler}>回上一頁</small>
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
                </ div>
            case '招牌廣告及樹立廣告許可申請':
                return <div className='marginWrap'>
                <PageHeader>
                    {id} <small onClick={this.clickHandler}>回上一頁</small>
                </PageHeader>
                <Row>
                    <Col xs={12} md={6}>
                        <PanelView title="壹、相關法令及規定：" body="建築法、招牌廣告及樹立廣告管理辦法。" />
                    </Col>
                    <Col xs={12} md={6}>
                    <PanelView title="貳、應附證件、書表、表單、附件：" body="一、申請書（如附件）。
二、招牌廣告及樹立廣告設計圖說（如附件範例）。
三、設置處所現場照片。
四、招牌廣告及樹立廣告安全證明書（如附件）。
五、招牌廣告及樹立廣告設置處所使用權同意書（如附件）。
六、設置處所之所有權證明文件。(申請地面樹立廣告者，應加附地籍圖謄本及土地登記謄本)
七、委託書。
八、申請人身分證或營利事業登記證影本。
　　九、承造廠商營利事業登記證影本。
十、公寓大廈區分所有權人會議同意之文件。" />
                    </Col>
                </Row>
                <Row>
                    {/* <Col xs={12} md={6}>
                        <PanelView title="肆、作業內容： " body="流程說明：如後附件。" />
                    </Col> */}
                    <Col xs={12} md={6}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">參、作業內容：</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>流程圖說明：如後附件。
                                <DownloadLink url="https://www.wratb.gov.tw/media/1873/招牌廣告及樹立廣告安全證明書.pdf" name="招牌廣告及樹立廣告安全證明書.pdf" />
                                <DownloadLink url="https://www.wratb.gov.tw/media/1872/招牌廣告及樹立廣告許可申請書.pdf" name="招牌廣告及樹立廣告許可申請書.pdf" />
                                <DownloadLink url="https://www.wratb.gov.tw/media/1871/招牌廣告及樹立廣告許可作業流程說明.pdf" name="招牌廣告及樹立廣告許可作業流程說明.pdf" />
                                <DownloadLink url="https://www.wratb.gov.tw/media/1870/招牌廣告及樹立廣告設置處所使用權同意書.pdf" name="招牌廣告及樹立廣告設置處所使用權同意書.pdf" />
                                <DownloadLink url="https://www.wratb.gov.tw/media/1869/廣告物設計圖說範例.pdf" name="廣告物設計圖說範例.pdf" />
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </ div>
            case '施工勘驗（放樣申報）':
            return <div className='marginWrap'>
            <PageHeader>
                {id} <small onClick={this.clickHandler}>回上一頁</small>
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="壹、目的：" body="為落實專業分工及審查權責劃分，加強便民措施，特制定本作業程序。" />
                </Col>
                <Col xs={12} md={6}>
                <PanelView title="貳、相關法令及規定： " body="建築法第五十六條。" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                <PanelView title="參、民眾應附證件、書表、表單、附件： " body="一、建築工程勘驗申報書（2份）。 (如附件)
二、建造執照或雜項執照正本。 
三、建築工程必需勘驗部分申報表（2份）。(如附件)
四、建築物監造(監督、查核)報告表（2份）。(如附件)
五、建築物施工中營造業專任工程人員督察紀錄表（2份）。(如附件)
六、建築執照起造人施工品質管理查核表。(公共建築工程應檢附)
七、各分項工程之建築執照承造人勘驗項目施工自主檢查表。(如附件)
八、監造人現地勘驗查核報告表。(如附件)
九、委託書。
十、基地鑑界(複丈)成果圖。
　　十一、領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表。
十二、鄰房現況鑑定報告。
十三、建造執照加註應附之文件。
十四、建築施工日誌。(如附件)
十五、部分放樣勘驗必須檢附已核備之書圖（2份）。
十六、下列核准書圖應置於工地備驗：建造執照書圖副本原卷(含工程圖樣及說明書)、建築線指定書圖副本、開工報告書副本原卷（含報備結構詳圖）。"  />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="肆、其他： " body="一、本局所轄建築工程必須勘驗部分由承造人會同監造人申報，申報次日得繼續施工。
二、前一樓層混凝土強度試驗報告書應委託經中華民國實驗室認證體系認可實驗室試驗並出具報告，並經監造人查核符合建築技術規則建築構造篇規定。
三、現況照片至少應能呈現工地周圍及申報該樓層相對位置、該樓層所有範圍申報前現況。" />
                </Col> 
                <Col xs={12} md={6}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <DownloadLink url="https://www.wratb.gov.tw/media/1888/各分項工程施工自主檢查表.pdf" name="各分項工程施工自主檢查表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1887/建築工程必須勘驗部分申報表.pdf" name="建築工程必須勘驗部分申報表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1886/建築工程勘驗申報書.pdf" name="建築工程勘驗申報書.pdf " />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1885/建築物施工中營造業專任工程人員督察紀錄表.pdf" name="建築物施工中營造業專任工程人員督察紀錄表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1884/建築物施工日誌.pdf" name="建築物施工日誌.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1883/建築物監造-監督-查核-報告表.pdf" name="建築物監造(監督、查核)報告表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1882/領得建造-雜項-執照建築基地入侵紅火蟻現場清查紀錄表.pdf" name="領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1881/委託書.pdf" name="委託書.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1880/監造人現地勘驗查核報告表.pdf" name="監造人現地勘驗查核報告表.pdf" />
                            
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </ div>
        case '施工勘驗（開工申報）':
        return <div className='marginWrap'>
            <PageHeader>
                {id} <small onClick={this.clickHandler}>回上一頁</small>
            </PageHeader>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="壹、目的：" body="為落實專業分工及審查權責劃分，加強便民措施，特制定本作業程序。" />
                </Col>
                <Col xs={12} md={6}>
                <PanelView title="貳、相關法令及規定： " body="建築法第五十六條。" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                <PanelView title="參、申報開工應備證件、書表、表單、附件：" body="一、開工申報書（3份）。 (如附件)
二、建造執照或雜項執照正本。 
三、起造人名冊(起造人2以上自行檢附)。(如附件)
四、營造業承攬建築工程開工查報表（3份）。(如附件)
五、營造廠完稅證明文件。
六、建築施工計畫書。(內含工程概要、監造計畫、施工品質管制計畫、安全衛生計畫、剩餘土石方處理計畫、施工防災計畫、水土保持施工許可證)
七、繳交空污費收據。
八、事業廢棄物清理計畫核准函(得於放樣勘驗前，送本局備查)。
九、結構詳圖。
十、現況照片。
十一、領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表。"  />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <PanelView title="肆、附註： " body="一、本局所轄建築工程必須勘驗部分由承造人會同監造人申報，申報次日得繼續施工。
二、剩餘土石方處理計畫得於放樣前另向本局辦理備查事宜，但需於建築施工計畫書註明。
三、現況照片至少應能呈現工地周圍及申報相對位置。" />
                </Col> 
                <Col xs={12} md={6}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                        <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <DownloadLink url="https://www.wratb.gov.tw/media/1893/起造人名冊.pdf" name="起造人名冊.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1892/剩餘土石方處理計畫書.pdf" name="剩餘土石方處理計畫書.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1891/開工申報書.pdf" name="開工申報書.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1890/開工查報表.pdf" name="開工查報表.pdf" />
                            <DownloadLink url="https://www.wratb.gov.tw/media/1889/領得建造-雜項-執照建築基地入侵紅火蟻現場清查紀錄表.pdf" name="領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表.pdf" />
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </ div>
        case '室內裝修許可（竣工查驗）':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="壹、目的：" body="依建築相關法令，作書圖文件實質內容審查和現場竣工查驗，及查核建築師是否依規定簽證負責，以強化行政作業效能。" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="貳、相關法令及規定： " body="依建築物室內裝修管理辦法及內政部八十六年五月二十日台（八六）內營字第八六七二八四二函規定者，得經由查驗人員辦理竣工查驗簽章負責後，逕送本局核發室內裝修合格證明。" />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、室內裝修竣工查驗申請書 (如附件)。 
二、歷次退件函影本（第一次掛號免附）。 
三、建築物室內裝修許可函影本。 
四、違建項目簽證表及違建相片（含索引平面圖）(如附件)。 
五、委託書(如附件)。 
六、建築物室內裝修施工業登記證影本或營造業登記證書。 
七、建築物室內裝修專業技術人員登記證。 
八、建築物室內裝修竣工材料書 (如附件)。 
九、建築物室內裝修材料計算表。 
十、經認證之裝修竣工材料合格證明。 
十一、室內裝修竣工查驗合格證明書 (如附件)。 
十二、消防局審查許可文件。 
十三、建築物室內裝修竣工查驗表 (如附件)。 
十四、室內裝修施工業者及人員聘任切結書(如附件)。 
十五、竣工圖說（2份）。 
十六、竣工照片及示意圖 
　　　　(一)樓梯及平台淨寬、梯級尺寸照片 
　　　　(二)防火區劃設施照片 
　　　　(三)各隔間照片 
　　　　(四)出入口及防火門照片 
　　　　(五)走廊淨寬照片 
　　　　(六)直通樓梯走廊之總寬度照片 
　　　　(七)緊急進口照片 
　　　　(八)停車空間照片 
(九)浴廁、廚房機能態樣相片"  />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">肆、流程圖：如後附件。</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <DownloadLink url="https://www.wratb.gov.tw/media/1927/申請建築執照送件審圖手續人員名單.pdf" name="申請建築執照送件審圖手續人員名單.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1926/委託書.pdf" name="委託書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1925/室內裝修施工業者及人員聘任切結書.pdf" name="室內裝修施工業者及人員聘任切結書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1923/室內裝修竣工查驗合格證明書.pdf" name="室內裝修竣工查驗合格證明書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1922/室內裝修竣工查驗作業流程表.pdf" name="室內裝修竣工查驗作業流程表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1921/建築物室內裝修竣工材料書.pdf" name="建築物室內裝修竣工材料書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1920/建築物室內裝修竣工查驗表.pdf" name="建築物室內裝修竣工查驗表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1919/建築執照各項專業報告書檢討切結書.pdf" name="建築執照各項專業報告書檢討切結書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1918/違章項目簽證表.pdf" name="違章項目簽證表.pdf" />
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </ div>
        case '現有巷道認定申請':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="壹、相關法令及規定：" body="建築法、新北市建築管理規則及內政部93年8月2日內授營建管字第0930085627號函示辦理本局轄區內現有巷道之認定業務。" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="貳、應附證件、書表、表單、附件：" body='一、申請書（如附件）。
二、地籍圖謄本(3個月內)。
三、土地登記簿謄本。
四、區公所出具現有巷道通行時間(即通行20年)函件。(逕向所在地區公所辦理)
五、航測圖第一版及第三版(供研判現有巷道通行時間)。(無備具區公所證明文件時檢附)
六、1/500現況圖。
七、1/500地籍套繪圖。
八、地籍位置圖。
九、基地現況照片（申請日期近況照片或數位業列印相片，尺寸以3"×5"為準）。' />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、室內裝修竣工查驗申請書 (如附件)。 
二、歷次退件函影本（第一次掛號免附）。 
三、建築物室內裝修許可函影本。 
四、違建項目簽證表及違建相片（含索引平面圖）(如附件)。 
五、委託書(如附件)。 
六、建築物室內裝修施工業登記證影本或營造業登記證書。 
七、建築物室內裝修專業技術人員登記證。 
八、建築物室內裝修竣工材料書 (如附件)。 
九、建築物室內裝修材料計算表。 
十、經認證之裝修竣工材料合格證明。 
十一、室內裝修竣工查驗合格證明書 (如附件)。 
十二、消防局審查許可文件。 
十三、建築物室內裝修竣工查驗表 (如附件)。 
十四、室內裝修施工業者及人員聘任切結書(如附件)。 
十五、竣工圖說（2份）。 
十六、竣工照片及示意圖 
(一)樓梯及平台淨寬、梯級尺寸照片 
(二)防火區劃設施照片 
(三)各隔間照片 
(四)出入口及防火門照片 
(五)走廊淨寬照片 
(六)直通樓梯走廊之總寬度照片 
(七)緊急進口照片 
(八)停車空間照片 
(九)浴廁、廚房機能態樣相片
"
 />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">肆、流程圖：如後附件。</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <DownloadLink url="https://www.wratb.gov.tw/media/1875/申請書.pdf" name="申請書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1874/現有巷道申請作業流程說明.pdf" name="現有巷道申請作業流程說明.pdf" />
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </ div>
    case '施工勘驗（各層施工勘驗）':
    return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="為落實專業分工及審查權責劃分，加強便民措施，特制定本作業程序。" />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="貳、相關法令及規定：" body='建築法第五十六條。' />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、建築工程勘驗申報書（2份）。 (如附件)
二、建造執照或雜項執照正本。 )
三、建築工程必需勘驗部分申報表（2份）。(如附件)
四、建築物監造(監督、查核)報告表（2份）。(如附件)
五、建築施工日誌。(如附件)
六、建築物施工中營造業專任工程人員督察紀錄表（2份）。(如附件)
七、建築執照起造人施工品質管理查核表(公共建築工程應檢附)。
八、各分項工程之建築執照承造人勘驗項目施工自主檢查表。(如附件)
九、部分施工勘驗必須檢附已核備之書圖（2份）。
十、剩餘土石方運送憑證收執聯、已簽證之處理紀錄表及合法收容處理場所完成處理明文件。
十一、建築物新拌混凝土氯離子含量檢測報告單（前次勘驗）。
十二、混凝土抗壓強度試驗報告書（前次勘驗）。
十三、預拌混凝土品質保證書。
十四、鋼筋(含鋼鐵建材)無輻射污染證明書及保證書。
十五、現況照片。
十六、下列核准書圖應置於工地備驗：建造執照書圖副本原卷(含工程圖樣及說明書)、建築線指定書圖副本、開工報告書副本原卷（含報備結構詳圖）。"  />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">肆、其他： </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <h4>一、本局所轄建築工程必須勘驗部分由承造人會同監造人申報，申報次日得繼續施工。</h4>
                <h4>二、前一樓層混凝土強度試驗報告書應委託經中華民國實驗室認證體系認可實驗室試驗並出具報告，並經監造人查核符合建築技術規則建築構造篇規定。</h4>
                <h4>三、現況照片至少應能呈現工地周圍及申報該樓層相對位置、該樓層所有範圍申報前現況。</h4>
                </Panel.Body>
            </Panel>
        </Col>
        <Col xs={12} md={6}>
        <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/1900/各分項工程施工自主檢查表.pdf" name="各分項工程施工自主檢查表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1899/建築工程必須勘驗部分申報表.pdf" name="建築工程必須勘驗部分申報表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1898/建築工程勘驗申報書.pdf" name="建築工程勘驗申報書.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1897/建築物施工中營造業專任工程人員督察紀錄表.pdf" name="建築物施工中營造業專任工程人員督察紀錄表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1896/建築物施工日誌.pdf" name="建築物施工日誌.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1895/建築物監造-監督-查核-報告表.pdf" name="建築物監造(監督、查核)報告表.pdf" />
                        <DownloadLink url="https://www.wratb.gov.tw/media/1894/領得建造-雜項-執照建築基地入侵紅火蟻現場清查紀錄表.pdf" name="領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
        case '室內裝修許可（書面審查）':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="壹、相關法令及規定：" body="依建築法第七十七條之二規定辦理。" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="貳、民眾應附證件、書表、表單、附件： " body='一、建築物室內裝修圖說申請書。(如附件) 
二、建築物室內裝修簽證表。(如附件) 
三、歷次退件函影本。(第一次掛號者免附) 
四、違建項目簽證表。(如附件) 
五、原使用執照或存根聯影本。
六、委託書。(如附件) 
七、建築物使用權同意書。(如附件) 
八、建物登記第一類謄本。 
九、室內裝修查核圖說合格證明書。 
十、消防局審查許可文件。 
十一、建築師安全鑑定書。 
十二、建物測量成果圖。 
十三、原使用執照竣工圖(申請範圍著色) 
　　　(一)基地位置、地盤圖、面積計算表 
　　　(二)當層平面圖 
十四、設計圖說3份。' />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <PanelView title="參、作業內容：" body="室內裝修書面審查流程表：如後附件。"  />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <DownloadLink url="https://www.wratb.gov.tw/media/1936/申請建築執照送件審圖手續人員名單.pdf" name="申請建築執照送件審圖手續人員名單.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1935/委託書.pdf" name="委託書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1934/室內裝修查核圖說合格證明書.pdf" name="室內裝修查核圖說合格證明書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1933/室內裝修圖說審查申請書.pdf" name="室內裝修圖說審查申請書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1932/室內裝修圖說審查流程表.pdf" name="室內裝修圖說審查流程表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1931/室內裝修簽證表.pdf" name="室內裝修簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1930/建築物使用權同意書.pdf" name="建築物使用權同意書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1929/建築師安全鑑定書.pdf" name="建築師安全鑑定書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1928/違章項目簽證表.pdf" name="違章項目簽證表.pdf" />
                    </Panel.Body>
                </Panel>
            </Col>
            
        </Row>
    </ div>
        case '變更使用執照申請（竣工查驗）':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="壹、目的：" body="依建築相關法令〔且適用於十層以下（含第十層）樓地板面積在三百平方公尺以下（含三百平方公尺）、十層樓以上樓地板面積在一百平方公尺以下且變更類組為D5、G2、G3、H2、F3或符合建築法第七十三條執行要點第十條規範者〕，訂定書圖文件以強化行政作業效率及簡化作業流程。" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="貳、相關法令及規定：" body='依建築法第七十三條規定及其執行要點辦理。' />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、變更使用執照申請書。 (如附件) 
二、變更使用執照概要表。 (如附件) 
三、書面審查核准函。 
四、變更使用執照檢討項目簽證表。 (如附件)
五、委託書(申請人委託建築師)。(如附件) 
六、門牌增編或保留證明（未涉及建築物分（併）戶者免附）。 
七、消防局審查許可文件 。 
八、使用執照之變更使用工程完竣報告表。 (如附件)
九、竣工照片及示意圖 
(一)樓梯及平台淨寬、梯級尺寸照片 
(二)防火區劃設施照片 
(三)各隔間照片 
(四)出入口及防火門照片 
(五)走廊淨寬照片 
(六)直通樓梯走廊之總寬度照片 
(七)緊急進口照片 
(八)停車空間照片 
十、竣工圖說。 
十一、建築執照各項專業報告書檢討切結書。 (如附件) "  />
            </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
            <PanelView title="肆、其他： " body="如涉及分(併)戶或室內裝修均得併案辦理，其審查流程不變。"  />
            </Col>
            <Col xs={12} md={6}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">伍、作業內容：一、流程說明：如流程圖。</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <DownloadLink url="https://www.wratb.gov.tw/media/1947/申請建築執照送件審圖手續人員名單.pdf" name="申請建築執照送件審圖手續人員名單.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1946/使用執照之變更使用工程完竣報告表.pdf" name="使用執照之變更使用工程完竣報告表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1945/委託書.pdf" name="委託書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1944/建築師安全鑑定書.pdf" name="建築師安全鑑定書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1943/建築執照各項專業報告書檢討切結書.pdf" name="建築執照各項專業報告書檢討切結書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1942/違建項目簽證表.pdf" name="違建項目簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1941/變更使用執照申請書.pdf" name="變更使用執照申請書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1940/變更使用執照竣工勘驗審查表.pdf" name="變更使用執照竣工勘驗審查表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1939/變更使用執照概要表.pdf" name="變更使用執照概要表.pdf" />
                    <DownloadLink url="hhttps://www.wratb.gov.tw/media/1938/變更使用執照檢討項目簽證表.pdf" name="變更使用執照檢討項目簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1937/變更竣工審查流程圖.pdf" name="變更竣工審查流程圖.pdf" />
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </ div>
        case '土地使用分區證明':
        return <div className='marginWrap'>
        <PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader>
        <Row>
        <Col xs={12} md={6}>
        <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">線上申請</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Link to={`/arch/分區證明線上申辦`} ><h4>線上申請（請點此）</h4></Link>
                    {/* <ABlank url="http://child.wratb.gov.tw/apply/PublicApply.aspx" name="線上申請（請點此）" /> */}
                    </Panel.Body>
                </Panel>
        </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <PanelView title="壹、說明：" body="台北水源特定區內居民為瞭解轄內都市計畫實施情形，得向本局（經濟部水利署台北水源特定區管理局）申請土地使用分區（或公共設施用地）證明。" />
            </Col>
            <Col xs={12} md={6}>
            <PanelView title="貳、應備書件： " body='一、請依式填寫申請書一份。 (如附件) 
二、於完成地籍分割地區，檢具標示有欲申請土地地號之地籍圖謄本（正本）一份。' />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <PanelView title="參、申請機關：" body="本局。"  />
            </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
            <PanelView title="肆、注意事項： " body="一、都市計畫土地使用分區（或公共設施用地）證明之使用分區（或公共設施用地）係依據已公告實施之都市計畫圖及地籍套繪圖核對，僅供參考之用，若作為實施之據應依現地指示建築線為準。 
二、都市計畫土地使用分區（或公共設施用地）證明，係就申請地號查核都市土地使用分區（或公共設施用地）及計畫說明書中之特殊土地使規定，如以市重劃方式整體開發及公共設施負擔比例之規定等予以查列，至計畫書中其他土地使用分區管制，如使用類別，使用性質、建蔽率、容積率、高度、前後院、側院及開發限制等之其他限制規定，請逕洽都市計畫主管機關查詢。 
三、證明書有效期間依證明書所載為準。 
四、本證明當核發後有關土地位置、地號或都市計畫內容如經依法公告、變更應以公告變更者為準，不再另行通知。"  />
            </Col>
            <Col xs={12} md={6}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                    <Panel.Title componentClass="h3">伍、作業內容：流程圖如後附件。</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <DownloadLink url="https://www.wratb.gov.tw/media/2006/土地使用分區證明核發流程圖.pdf" name="土地使用分區證明核發流程圖.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/2005/土地使用分區證明書-填寫範例.pdf" name="土地使用分區證明書(填寫範例).pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/2004/土地清冊.pdf" name="土地清冊.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/2003/土地清冊-填寫範例.pdf" name="土地清冊(填寫範例).pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/2002/使用分區流程圖.gif" name="使用分區流程圖.gif" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/2001/使用分區申請書.doc" name="使用分區申請書.doc" />
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    </ div>
    case '執照圖說影印':
    return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
    <Col xs={12} md={6}>
    <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">線上申請</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Link to={`/arch/影印圖說申請書`} ><h4>線上申請（請點此）</h4></Link>
                {/* <ABlank url="http://child.wratb.gov.tw/apply/PhoCopyDraw.aspx" name="線上申請（請點此）" /> */}
                </Panel.Body>
            </Panel>
    </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="提供民眾申請建築執照卷內之文件、圖說之影印。" />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="貳、相關法令及規定： " body='依據建築法第七十條及內政部七五、四十台內營字第三六八九七０號及七十四年四月十七日台內營字第三○二○一九號函辦理。' />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <PanelView title="參、民眾應附證件、書表、表單、附件： " body="一、申請書(如附件） 
(一)註明使建照年度字號（查詢方式如下）： 
1.依使照謄本上記載 
2.依建物登記簿謄本上記載 
3.依建物測量成果圖上記載 
4.以土地地號向建管課套繪室查套繪圖 
5.其他相關單位記錄 
(二)註明申請範圍
二、房屋權利證明文件 
(一)建物登記謄本正本 
(二)建物所有權狀影本 
(三)建物測量成果圖 
(四)公寓大廈管理組織報備證明 
(五)房屋稅單 
(六)買賣、租賃契約 
(七)法院告訴證明文件 
(八)其他可佐證之文件 
※(一)至(八)項擇一 
(九)雙方印章(房屋所有權人及申請人)"  />
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
        <PanelView title="肆、內部作業使用表單附件：" body="略"  />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="伍、名詞解釋：" body="略"  />
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
        <PanelView title="陸、申請人資格： " body="一、建築物所有權 
二、權利關係人或法律上有利害關係者。 
三、受委託人(應備委託書及雙方身分證影印本)"  />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/2007/影印圖說申請書.pdf" name="影印圖說申請書.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
        case '影印圖說申請書':
        return <></>
        case '公有畸零地合併使用證明':
        return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
    <Col xs={12} md={6}>
    <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">線上申請</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Link to={`/arch/公有畸零地合併使用申請書`} ><h4>線上申請（請點此）</h4></Link>
                {/* <ABlank url="http://child.wratb.gov.tw/apply/PublicLandApp.aspx" name="線上申請（請點此）" /> */}
                </Panel.Body>
            </Panel>
    </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="提昇辦理公有畸零地合併使用證明作業效率，以維護人民應有之權益。" />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="貳、民眾應檢附證件、書表、表單附件：" body='一、申請書 (如附件）3份。 
二、申請合併使用範圍圖3份 。 
三、合併使用範圍之土地登記第一類謄本。 
四、合併使用範圍地籍圖謄本。 
五、建築線指示圖。 
六、土地使用分區證明。
七、鄰接道路寬度證明文件。
八、現況照片（需標明拍攝位置、方向）。' />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <PanelView title="參：" body="委辦人應檢附委託書及雙方身分證明文件影本。"  />
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
        <PanelView title="肆、作業內容： " body="流程說明：如後附件。"  />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">檔案下載</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/2009/公有畸零地合併使用證明申請作業流程說明.pdf" name="公有畸零地合併使用證明申請作業流程說明.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/2008/公有畸零地合併使用證明申請書.pdf" name="公有畸零地合併使用證明申請書.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
            case '建築線申請':
            return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="簡化指定建築線作業步驟、統一流程並使申請作業透明化以達簡政便民及縮短審核時間之目的。" />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="貳、相關法令及規定：" body='建築法、新北市建築管理規則。' />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <PanelView title="參、民眾應附證件、書表、表單、附件：" body='一、申請書（如附件）。
二、建築線指定委託書。（如附件）。
三、建築線指定申請書圖（依內政部頒格式繪製）。
四、自申請日起3個月內之地籍圖謄本正本。
五、基地現況照片（申請日期近況照片或數位業列印相片，尺寸以3"×5"為準）。
六、認定現有巷道之資料（如該巷道前經本局認定在案並有資料可供查對者免附）。'  />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <PanelView title="肆、名詞解釋：" body="現有巷道：請參考「新北市建築管理規則第二條」規定，內容如下：
一、公用地役關係之巷道。
二、私設通路，經土地所有權人出具供公眾通行同意書者。
三、捐獻土地為道路使用，經依法完成土地移轉登記手續者。
四、七十三年十一月七日建築法修正公佈前，曾指定建築線之現有巷道，經認定無礙公共安全、公共衛生、公共交通及市容觀瞻者。
前項第一款所稱公用地役關係之巷道，須於供通行之初，土地所有權人並無阻止情事，繼續和平通行達二十年，且為不特定公眾通行所必要者。"  />
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
        <PanelView title="伍、其他：" body="略。"  />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">陸、作業內容：流程說明：如後附件。</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/1879/建築線申請作業流程說明.pdf" name="建築線申請作業流程說明.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1878/土地供公共通行同意書.pdf" name="土地供公共通行同意書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1877/建築線申請書.pdf" name="建築線申請書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1876/建築線指定委託書.pdf" name="建築線指定委託書.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
            case '無障礙生活環境宣導專頁':
            return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={12}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9b7lR4oqy2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
    </Row>
    </div>
    case '變更起、承、監造人申請':
    return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、相關法令及規定：" body="建築法第五十五條。" />
        </Col>
        <Col xs={12} md={12}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">貳、應附證件、書表、表單、附件：</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <ul style={{listStyleType:'none'}}>
                        <li>一、變更起造人：
                            <ol >
                                <li>變更起造人申報書（3份）（如附件）。</li>
                                <li>變更起造人名冊（3份）（如附件）(起造人為2人以上時才填此表)。</li>
                                <li>相關身分證明文件。</li>
                                <li>委託書（如附件）。</li>
                                <li>變更起造人理由書。</li>
                                <li>建造(雜項)執照正本。</li>
                                <li>地籍圖謄本(3個月內)。</li>
                                <li>土地登記謄本(第一類)(3個月內)。</li>
                                <li>土地使用權同意書。</li>
                            </ol>
                        </li>
                        <li>二、變更承造人：
                            <ol>
                                <li>變更承造人申報書（3份）（如附件）。</li>
                                <li>變更承造人名冊（3份）（如附件）(承造人為2人以上時才填此表)。</li>
                                <li>起造人同意書（如附件）。</li>
                                <li>原承造人放棄承攬同意書（如附件）。</li>
                                <li>新承造人承攬同意書（如附件）。</li>
                                <li>委託書。</li>
                                <li>建造(雜項)執照正本。</li>
                                <li>變更後營造業承攬手冊及專任工程人員當年度公會會員證影本及完稅證明文件。</li>
                            </ol>
                        </li>
                        <li>三、變更監造人：
                            <ol >
                                <li>變更監造人申報書（2份）（如附件）。</li>
                                <li>變更監造人名冊（2份）（如附件）(監造人為2人以上時才填此表)。</li>
                                <li>起造人同意書（如附件）。</li>
                                <li>原監造人放棄承攬同意書（如附件）。</li>
                                <li>新監造人承攬同意書（如附件）。</li>
                                <li>委託書。</li>
                                <li>建造(雜項)執照正本。</li>
                                <li>變更後建築師附開業證書及完稅證明文件。</li>
                            </ol>
                        </li>
                    </ul>
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">參、作業內容：流程說明：如後附件。</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/1914/委託書.pdf" name="委託書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1913/原承造人放棄承攬同意書.pdf" name="原承造人放棄承攬同意書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1912/原監造人放棄監造同意書.pdf" name="原監造人放棄監造同意書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1911/起造人同意書-承造.pdf" name="起造人同意書(承造).pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1910/起造人同意書-監造.pdf" name="起造人同意書(監造).pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1909/新承造人承攬同意書.pdf" name="新承造人承攬同意書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1908/新監人承攬同意書.pdf" name="新監人承攬同意書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1907/變更承造人申報書.pdf" name="變更承造人申報書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1906/變更承造人名冊.pdf" name="變更承造人名冊.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1905/變更起-承-監造人作業流程表.pdf" name="變更起、承、監造人作業流程表.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1904/變更起造人申報書.pdf" name="變更起造人申報書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1903/變更起造人名冊.pdf" name="變更起造人名冊.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1902/變更監造人申報書.pdf" name="變更監造人申報書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1901/變更監造人名冊.pdf" name="變更監造人名冊.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '開工、竣工展期申請':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、相關法令及規定：" body="建築法第五十四條。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="貳、應附證件、書表、表單、附件：" body="一、建築工程開工展期申請書2份（如附件）。
二、建築工程竣工展期申請書2份（如附件）。
三、建造執照正本。
四、竣工展期應檢附修正預定進度表。
五、營造業完稅證明（竣工展期檢附）。" />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">參、作業內容：流程說明：如後附件。</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <DownloadLink url="https://www.wratb.gov.tw/media/1917/竣工展期申請書.pdf" name="竣工展期申請書.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1916/開工-竣工展期申請作業流程.pdf" name="開工、竣工展期申請作業流程.pdf" />
                <DownloadLink url="https://www.wratb.gov.tw/media/1915/開工展期申請書.pdf" name="開工展期申請書.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '法定空地分割':
return <div className='marginWrap'>
<PageHeader>
    {id} <small onClick={this.clickHandler}>回上一頁</small>
</PageHeader>
<Row>
<Col xs={12} md={6}>
<Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">線上申請</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <Link to={`/arch/法定空地分割證明申請書`} ><h4>線上申請（請點此）</h4></Link>
            {/* <ABlank url="http://child.wratb.gov.tw/apply/LegalLandApp.aspx" name="線上申請（請點此）" /> */}
            </Panel.Body>
        </Panel>
</Col>
</Row>
<Row>
    <Col xs={12} md={6}>
        <PanelView title="壹、目的：" body="提昇辦理法定空地證明作業效率，以維護人民應有之權益。" />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="貳、相關法令規定：" body='依建築法第十一條規定、及建築技術規則設計施工篇第一條、第二條之一、第三條之二、第七條、第一百一十八條及第一百六十三條規定。' />
    </Col>
</Row>
<Row>
    <Col xs={12} md={12}>
    <PanelView title="參、民眾應檢附證件、書表、表單附件：" body="一、申請書 (如附件）。 
二、申請人（所有權人）、受委託人委託書 (如附件）及身分證影本。 
三、土地所有權狀影本或土地登記謄本。 
四、地籍圖謄本乙份【請於圖說上標示申請位置並著色】。 
五、使用執照資料。 
六、分割圖。(其比例應與地籍圖相同)
七、一樓平面圖及配置分割示意圖。(應標示建築物最大投影範圍，其比例不得小於1/200) "  />
    </Col>
</Row>
<Row>
    <Col xs={12} md={6}>
    <PanelView title="肆、申請人應以土地所有權人名義為之。" body=""  />
    </Col>
</Row>
<Row>
<Col xs={12} md={6}>
    <PanelView title="伍、名詞解釋：" body="法定空地：法定空地為組成建築基地的二項要件之一，另一為建築面積，在建築基地中，建築面積以外的土地即為法定空地；法定空地應包括建築物與其前左右之道路或其它建築物間之距離，其規定多屬外部規劃法規，如防火間隔、前後側院、鄰幢間隔、採光、通風、私設通路、類似通路、基地內通路，迴車道、退縮建築退縮部分等。"  />
    </Col>
    <Col xs={12} md={6}>
        <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">陸、作業內容：流程說明：如後附件。</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <DownloadLink url="https://www.wratb.gov.tw/media/2014/委託書.pdf" name="委託書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/2013/法定空地分割申請書.pdf" name="法定空地分割申請書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/2012/法定空地證明申請作業流程說明.pdf" name="法定空地證明申請作業流程說明.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/2011/法定空地證明申請作業範本.pdf" name="法定空地證明申請作業範本.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/2010/法定空地證明申請書.pdf" name="法定空地證明申請書.pdf" />
            </Panel.Body>
        </Panel>
    </Col>
</Row>
</ div>
case '合法房屋證明':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="制定標準作業程序，提昇辦理建築法修正前舊有之合法房屋認定時效。" />
        </Col>
        <Col xs={12} md={12}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">貳、相關法令及認定規定：</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <h3>本特定區因位於新北市境內，縣(市)政府有依建築法第一百零一條規定訂定建築管理規則者，為避免建管業務有一市二制之情形，故均以新北市政府所訂規則為依據。 </h3>
                    <ul style={{listStyleType:'none'}}>
                        <li>一、新北市政府核發合法房屋證明處理要點。 
                        </li>
                        <li>二、改制前之台北縣政府八十八年八月十二日八八北府工使字第三０一一二０號函示：「建築物既經地政事務所辦理產權登記，並依土地法規定，建物登記具絕對效力，故該建物所有權登記證明可直接作為認定合法房屋之依據。惟若有改建、增建、修建者，依法應領有使用執照始可認定為合法房屋。」
                        </li>
                    </ul>
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
        <Panel bsStyle="primary">
        <PanelView title="參、民眾應附證件: " body="一、申請書。 
二、土地所有權相關文件：(一)地籍圖謄本。(二)土地登記簿謄本。 
三、現況照片。
四、內政部八十九年四月二十四日臺八九內營字八九０四七六三號函規定八種證明文件之一： 
(一)建築執照。 
(二)建物登記證明。 
(三)未實施建築管理地區建築物完完工證明書。 
(四)載有該建築物資料之土地使用現況調查清冊或卡片之謄本。 
(五)完納稅捐證明。 
(六)繳納自來水費或電費證明。 
(七)戶口遷入證明。 
(八)地形圖、都市計劃現況圖、都市計劃禁建圖、航照圖或政府機關測繪地圖。前項代理人應檢附委託書。"  />
            </Panel>
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">肆、作業內容：流程說明。</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <DownloadLink url="https://www.wratb.gov.tw/media/2015/合法房屋證明申請表.pdf" name="合法房屋證明申請表.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '變更使用執照申請（書面審查）':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="依建築相關法令，查核建築師是否依規定簽證負責，加速變更使用執照之核發。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="貳、相關法令及規定：" body="依建築法第七十三條規定及其執行要點辦理。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <Panel bsStyle="primary">
        <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、變更使用執照申請書。(如附件) 
二、變更使用執照概要表。(如附件) 
三、原使用執照或存根聯影本。 
四、土地使用分區證明。 
五、變更使用說明書。(如附件) 
六、變更申請圖說。 
七、變更使用執照檢討項目簽證表。(如附件) 
八、委託書（申請人委託建築師）。 (如附件) 
九、建築師安全鑑定書(如附件) 及結構計算書(未涉及主要構造變更及活載重由高變低或相同者，得免檢附結構計算書)。 
十、設計圖說。 
十一、公寓大廈規約(含專有、共用部份標示之詳細圖說及公寓大廈、規約內容)(未涉及共用或約定專有部份者免附)。 
十二、原使用執照竣工圖(圖套裝定)(申請範圍著色) 
(一)基地位置、地盤圖、面積計算表 
(二)當層平面圖 
十三、地籍圖謄本。 
十四、土地登記簿謄本。
十五、土地使用權同意書。 
十六、消防局審查許可文件。 
十七、其他必要文件(建物登記簿謄本、建物測量成果圖、建築物使用權同意書(所有權人為同一人者免附))。"  />
            </Panel>
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
        <PanelView title="肆、其他： " body="如涉及分(併)戶或室內裝修均得併案辦理，其審查流程不變。" />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">伍、作業內容：變更書面流程圖：如後附件。</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <DownloadLink url="https://www.wratb.gov.tw/media/1957/申請建築執照送件審圖手續人員名單.pdf" name="申請建築執照送件審圖手續人員名單.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1956/委託書.pdf" name="委託書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1955/建築物使用權同意書.pdf" name="建築物使用權同意書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1954/建築師安全鑑定書.pdf" name="建築師安全鑑定書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1953/違建項目簽證表.pdf" name="違建項目簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1952/變更使用執照申請書.pdf" name="變更使用執照申請書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1951/變更使用執照概要表.pdf" name="變更使用執照概要表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1950/變更使用執照檢討項目簽證表.pdf" name="變更使用執照檢討項目簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1949/變更使用說明書.pdf" name="變更使用說明書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1948/變更書面流程圖.pdf" name="變更書面流程圖.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '建築物使用項目更動報備':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="依建築相關法令，作書圖文件審查及查核建築師是否依規定簽證負責，以落實擴大簽證及強化行政作業效能。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="貳、相關法令及規定：" body="建築法第七十三條及其要點規定辦理。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={12}>
        <Panel bsStyle="primary">
        <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、建築物使用項目更動報備書 (如附件）。 
二、違建項目簽證表 (如附件）。 
三、原使用執照或存根聯影本。 
四、委託書（申請人委託建築師） (如附件）。 
五、申請建築（建造、雜項、使照、變更使照、工程查驗、變更起造人）執照送件審圖手續人員名單(如附件）。 
六、歷次退件函正本(第一次掛號者免附)。 
七、目的事業主管機關核准文件及消防局審查許可文件。 
八、建物登記簿謄本。 
九、建物測量成果圖。 
十、建築物使用權同意書（所有權人為同一人者免附） (如附件）。 
十一、公寓大廈規約（含專有、共用部份標示之詳細圖說及公寓大廈規約內容）（未涉及共用或約定專有部份者免附。 
十二、建築師安全鑑定書 (如附件）及結構計算書(未涉及主要構造變更及活載重由高變低或相同者，得免檢附結構計算書)。 
十三、更動範圍圖說(圖套裝訂)(乙式三份)。 
十四、原使用執照竣工圖(圖套裝訂)（申請範圍著色） 
(一)基地位置、地盤圖、面積計算表 
(二)當層平面圖 
十五、建築執照各項專業報告書檢討切結書 (如附件）。"  />
            </Panel>
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
        <PanelView title="肆、內部作業使用表單附件： " body="一、變更使用執照（書面審查、竣工查驗）、室內裝修、變更戶數及增併編門牌、建築物使用項目更動預審表(如附件）。 
二、變更使用執照平行分會各目的事業主管機關事項表 (如附件）。" />
        </Col>
        <Col xs={12} md={6}>
        <PanelView title="伍、名詞解釋：" body="略" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
        <PanelView title="陸、其他：" body="如涉及分(併)戶或室內裝修須併案辦理。" />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">柒、作業內容： </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                一、流程圖：如後附件。<br />二、流程說明：如後附件。
                    <DownloadLink url="https://www.wratb.gov.tw/media/1968/申請建築執照送件審圖手續人員名單.pdf" name="申請建築執照送件審圖手續人員名單.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1967/委託書.pdf" name="委託書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1966/建築物使用項目更動報備申請書.pdf" name="建築物使用項目更動報備申請書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1965/建築物使用項目更動報備作業流程圖.pdf" name="建築物使用項目更動報備作業流程圖.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1964/建築物使用項目更動報備作業流程說明.pdf" name="建築物使用項目更動報備作業流程說明.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1963/建築物使用權同意書.pdf" name="建築物使用權同意書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1962/建築師安全鑑定書.pdf" name="建築師安全鑑定書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1961/建築執照各項專業報告書檢討切結書.pdf" name="建築執照各項專業報告書檢討切結書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1960/違建項目簽證表.pdf" name="違建項目簽證表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1959/變更使用執照平行分會各目的事業主管機關事項表.pdf" name="變更使用執照平行分會各目的事業主管機關事項表.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1958/變更使用執照更動預審表.pdf" name="變更使用執照更動預審表.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '建築物分（併）戶申請':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="依建築相關法令，作書圖文件審查及建築師是否依規定簽證負責，以落實擴大簽證及強化行政作業效率。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="貳、民眾應附證件、書表、表單、附件：" body="一、建築物分 (併)戶核備申請書。(如附件) 
二、分(併)戶同意書。(如附件) 
三、建築物權利證明文件（建築物登記簿謄本或改良登記物所有權狀）。 
四、原使用執照或存根聯影本。 
五、建物測量成果圖。 
六、變更後建築平面圖(乙式四份，申請人簽章)。 
七、原使用執照竣工平面圖。 
八、分戶牆拆除說明書。(如附件) 
九、其他指定文件。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">參、作業內容：</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                一、流程說明：如後附件。
                    <DownloadLink url="https://www.wratb.gov.tw/media/1972/分-併-戶同意書.pdf" name="分 (併)戶同意書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1971/分戶牆拆除說明書.pdf" name="分戶牆拆除說明書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1970/建築物分-併-戶核備申請書.pdf" name="建築物分 (併)戶核備申請書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1969/建築物變更戶數申請作業流程說明.pdf" name="建築物變更戶數申請作業流程說明.pdf" />
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '機械遊樂設施檢查申報':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、相關法令及規定： " body="依據「建築法第七十七條之三相關規定辦理。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="貳、民眾應附證件、書表、表單、附件：" body="一、申報書。 
二、機械遊樂設施安全檢查報告書(1式3份)。 
三、專業技師或內政部指定之檢查單位開業證明文件影本。 
四、其他文件。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">參、作業內容：</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                流程說明：如後附件。
                    <DownloadLink url="https://www.wratb.gov.tw/media/1973/機械遊樂設施檢查申報作業流程表.pdf" name="機械遊樂設施檢查申報作業流程表.pdf" />
                    
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '建築物公共安全檢查申報':
return <div className='marginWrap'>
    <PageHeader>
        {id} <small onClick={this.clickHandler}>回上一頁</small>
    </PageHeader>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="壹、目的：" body="建築物安全檢查之目的在使建築物之健康處於正常、合法、無礙公共安全的狀態，一經檢查發現即應提出改善計畫限期改正，以維持正當健康之使用，確保建築物構造與設備的安全。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="貳、相關法令及規定：" body="依據「建築法第七十七條、第九十一條」及「建築物公共安全檢查簽證及申報辦法」等相關規定辦理。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="參、民眾應附證件、書表、表單、附件，並以二維條碼及網路方式申報：" body="一、建築物防火避難設施與設備安全檢查申報書【表一】(如附件)。 
二、建築物防火避難設施與設備安全檢查申報結果通知書【表二】(如附件)(正本乙份，副本四份)。 
三、專業檢查人名冊【表三】(如附件)。 
四、建築物防火避難設施與設備安全檢(複)查報告書【表四】(如附件)。
五、建築物防火避難設施檢查記錄簡圖【表五】(如附件)。
六、建築物設備安全檢查記錄簡圖【表六】(如附件)。 
七、建築物防火避難設施與設備安全檢查改善計畫書【表七】(如附件)。 
八、建築物安全檢查專業檢查人員或專業機構認可證。 
九、使用執照影本。 
十、房屋權利證明影本。 
十一、現況照片。 
十二、營業登記證影本。 
十三、保險證明文件。 
十四、室內裝修合格證明。" />
        </Col>
        <Col xs={12} md={6}>
            <PanelView title="肆、內部作業使用表單附件： " body="內政部85.12.30台（85）內營字第8589024號函訂定之建築物公共安全檢查簽證及申報相關書表。" />
        </Col>
    </Row>
    <Row>
        <Col xs={12} md={6}>
            <PanelView title="伍、名詞解釋： " body="一、專業檢查人：係指參加中央主管建築機關舉辦之建築物安全專業檢查人講習結業，並頒有「專業檢查人認可證」者。 
二、專業機構：係指依據「建築物公共安全檢查專業機構與人員認可基準」第四項規定，置有七人以上之防火避難設施類專業檢查人及三人以上之設備安全類專業檢查人，並成立法人組織，經中央主管建築機關核發專業機構認可證者。 
三、專業檢查人員：係指參加中央主管建築機關舉辦之建築物安全專業檢查人講習結業，並領有「專業檢查人認可證」之開業建築師或執業技師。" />
        </Col>
        <Col xs={12} md={6}>
            <Panel bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">陸、作業內容： </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                流程說明：如後附件。
                    <DownloadLink url="https://www.wratb.gov.tw/media/1981/公共安全檢查標準作業程序流程說明.pdf" name="公共安全檢查標準作業程序流程說明.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1980/表一-建築物防火避難設施與設備安全檢查申報書.pdf" name="表一：建築物防火避難設施與設備安全檢查申報書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1979/表二-建築物防火避難設施與設備安全檢查申報結果通知書.pdf" name="表二：建築物防火避難設施與設備安全檢查申報結果通知書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1978/表三-專業檢查人名冊.pdf" name="表三：專業檢查人名冊.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1977/表四-建築物防火避難設施與設備安全檢-複-查報告書.pdf" name="表四：建築物防火避難設施與設備安全檢(複)查報告書.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1976/表五-建築物防火避難設施檢查記錄簡圖.pdf" name="表五：建築物防火避難設施檢查記錄簡圖.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1975/表六-建築物設備安全檢查記錄簡圖.pdf" name="表六：建築物設備安全檢查記錄簡圖.pdf" />
                    <DownloadLink url="https://www.wratb.gov.tw/media/1974/表七-建築物防火避難設施與設備安全檢查改善計畫書.pdf" name="表七：建築物防火避難設施與設備安全檢查改善計畫書.pdf" />
                    
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
</ div>
case '使用執照遺失、補發':
return <div className='marginWrap'>
<PageHeader>
    {id} <small onClick={this.clickHandler}>回上一頁</small>
</PageHeader>
<Row>
<Col xs={12} md={6}>
<Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">線上申請</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <Link to={`/arch/執照遺失切結書`} ><h4>線上申請（請點此）</h4></Link>
            {/* <ABlank url="http://child.wratb.gov.tw/apply/LicLoseApp.aspx" name="線上申請（請點此）" /> */}
            </Panel.Body>
        </Panel>
</Col>
</Row>
<Row>
    <Col xs={12} md={6}>
        <PanelView title="壹、目的：" body="制訂標準化流程，提昇辦理建築物使用執照遺失補發作業之行政時效。" />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="貳、相關法令及規定：" body='建築法第四十條。' />
    </Col>
</Row>
<Row>
    <Col xs={12} md={6}>
    <PanelView title="參、民眾應附證件、書表、表單、附件：" body="一、申請書。 
二、執照遺失切結書。 (如附件) 
三、登報作廢證明。 
四、產權證明文件。 
五、門牌整編証明(若產權證明文件上之地址與使用執照所登記不符時需檢附)。"  />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="肆、內部作業使用表單附件：" body="(略)"  />
    </Col>
</Row>
<Row>
<Col xs={12} md={6}>
    <PanelView title="伍、名詞解釋：" body="(略)"  />
    </Col>
    <Col xs={12} md={6}>
        <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">陸、作業內容： </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            一、流程圖：如後附件。<br />二、流程說明：如後附件。
            <DownloadLink url="https://www.wratb.gov.tw/media/1984/使照遺失程序流程圖.pdf" name="使照遺失程序流程圖.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1983/使照遺失程序流程說明.pdf" name="使照遺失程序流程說明.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1982/執照遺失切結書.pdf" name="執照遺失切結書.pdf" />
            </Panel.Body>
        </Panel>
    </Col>
</Row>
</ div>
case '使用執照存根申請':
return <div className='marginWrap'>
<PageHeader>
    {id} <small onClick={this.clickHandler}>回上一頁</small>
</PageHeader>
<Row>
<Col xs={12} md={6}>
<Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">線上申請</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <Link to={`/arch/使用執照存根聯申請書`} ><h4>線上申請（請點此）</h4></Link>
            </Panel.Body>
        </Panel>
</Col>
</Row>
<Row>
    <Col xs={12} md={6}>
        <PanelView title="壹、目的：" body="提供民眾申請使照謄本。" />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="貳、相關法令及規定：" body='依據建法第七十條及內政部七五、四十台內營字第三六八九七０號及七十四年四月十七日台內營字 第三０二０一九號函辦理。' />
    </Col>
</Row>
<Row>
    <Col xs={12} md={6}>
    <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">參、民眾應附證件、書表、表單、附件：</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <h4>
                <ul style={{listStyleType:'none'}}>一.申請書 (如附件)。 (一)註明使建照年度字號（查詢方式如下）： 
                    <li>1.建物謄本記載</li>
                    <li>2.使照謄本記載　</li>
                    <li>3.依建物測量成果圖上記載</li>
                    <li>4.以土地地號向建管課套繪室查套繪圖</li>
                    <li>5.其他相關單位紀錄</li>
                </ul>
                <ul style={{listStyleType:'none'}}>二.房屋權利證明文件（請檢附如下之一，影本須核章證明無誤）： 
                    <li>（一）建物登記謄本正本 </li>
                    <li>（二）建物所有權狀 </li>
                    <li>（三）建物測量成果圖</li>
                    <li>（四）買賣、租賃契約</li>
                    <li>（五）公寓大廈管理組織報備證明</li>
                    <li>（六）房屋稅單 </li>
                    <li>（七）法院告訴證明文件 </li>
                    <li>（八）其他可佐證之文件</li>
                </ul>
                <ul style={{listStyleType:'none'}}>三.如委託他人代辦者上述相關文件皆請備妥正本供查驗，所繳文件一經入案概不退還。
                </ul>
                </h4>
            </Panel.Body>
        </Panel>
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="肆、內部作業使用表單附件：" body="略"  />
    </Col>
</Row>
<Row>
<Col xs={12} md={6}>
    <PanelView title="伍、名詞解釋：" body="略"  />
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
    <PanelView title="陸、其他：" body="略"  />
    </Col>
    <Col xs={12} md={6}>
        <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">柒、作業內容：</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <h4>一、流程圖。<br />二、流程說明。</h4>
            <DownloadLink url="https://www.wratb.gov.tw/media/1987/使用執照謄本申請書.pdf" name="使用執照謄本申請書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1986/使照謄本核發流程圖.pdf" name="使照謄本核發流程圖.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1985/使照謄本核發流程說明.pdf" name="使照謄本核發流程說明.pdf" />
            </Panel.Body>
        </Panel>
    </Col>
</Row>
</ div>
case '使用執照存根聯申請書':
return <>

</>
case '使用執照申請':
return <div className='marginWrap'>
<PageHeader>
    {id} <small onClick={this.clickHandler}>回上一頁</small>
</PageHeader>
<Row>
    <Col xs={12} md={6}>
        <PanelView title="壹、目的：" body="民眾申請使用執照時，常有文件不全或漏蓋印章之情形發生，導致案件遭退件，因此建立申請使照預審制度，事先過濾文件不符之申請案件，以加速使照核發速度。" />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="貳、相關法令及規定：" body='建築法第七十條及新北市建築管理規則第二十七條' />
    </Col>
</Row>
<Row>
    <Col xs={12} md={6}>
    <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">參、民眾應檢附證件、書表、表單、附件： </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <h4>
                <ol >
                   <li>使用執照申請書(如附件)。</li>
                    <li>修改竣工圖併案變更設計申請書（起造人、監造人、承造人及主任技師簽章）(如附件)。</li>
                    <li>建築物概要表(如附件)。</li>
                    <li>起造人名冊〔名冊若更改，附身分證正反面影本或戶口名簿影本或戶籍謄本〕 (如附件)。</li>
                    <li>委託書 (如附件)。</li>
                    <li>地籍圖謄本、土地登記謄本正本及土地使用權同意書蓋章(未涉及建築基地變更免附)。 </li>
                    <li>建造執照正本。</li>
                    <li>營建工程空氣污染防制費繳納結清證明正本。</li>
                    <li>營造廠近期稅卡（申報書）。</li>
                    <li>完工證明書 (未於竣工期限內掛件申請使照者應檢附) 。</li>
                    <li>按圖施工證明書（承造人及主任技師簽章）(如附件)。 </li>
                    <li>監造證明書（監造人大小章及簽名）(如附件)。</li>
                    <li>門牌號碼證明正本。</li>
                    <li>營造業承攬工程竣工查報表（承造人及技師簽章）(如附件)。</li>
                    <li>營建廢棄物處理完成證明文件。</li>
                    <li>建築物施工階段最後申報樓層之預拌混凝土氯離子含量檢測報告書及混凝土強度試驗報告書。</li>
                    <li>剩餘土石方處理完成證明文件 （棄土者：檢附棄土方處理完成證明文件、填土者：檢附1.確實依規定施工證明書。2.土方來源證明文件。3.填土方施工前、中、後照片）(倘挖填方平衡者免附)。 
                    </li>
                    <li>領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表。</li>
                    <li>未損壞公共設施示意圖及照片。</li>
                    <li>昇降設備檢查合格證明文件及建築物附設停車空間機械停車設備竣工檢查表。</li>
                    <li>損鄰陳情住戶名冊（需打字）（依陳情人對戶編號）(如附件)。</li>
                    <li>建物竣工照片及示意圖（以平面圖表示，著色標明）（包 括建物各向立面、屋頂、法定空地、防火間隔、停車空 間、天井、挑空、擋土墻、污水處理設施、防火門標識、無障礙設施等）。</li>
                    <li>挑空清冊及結構安全報告書(如附件)。</li>
                    <li>建物竣工圖（配置圖、立面圖及全部平面圖）（監造人、承造人及主任技師簽章）。</li>
                    <li>公寓大廈管理公共基金、計算表(如附件)。 </li>
                    <li>公寓大廈管理公共基金繳交公庫代收證明。</li>
                    <li>水土保持計畫竣工審查文件。 </li>
                    <li>下水道竣工審查文件。</li>
                    <li>消防設備竣工審查核准文件（含圖說）。</li>
                    <li>室內裝修竣工審查核准證明文件（含圖說）。</li>
                    <li>無障礙環境竣工審查核准證明文件（含圖說）。</li>
                    <li>雨水貯留滯洪及涵養水分再利用相關設施竣工文件。 </li>
                    <li>屋頂層施工勘驗後至竣工期間之「建築物施工日誌」(96年7月1日以後開工者應檢附)。 </li>
                </ol>
                </h4>
            </Panel.Body>
        </Panel>
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="肆、內部作業使用表單、附件： " body="使用執照申請案預審表、損鄰陳情對照本局處理程序表。"  />
    </Col>
</Row>
<Row>
<Col xs={12} md={6}>
    <PanelView title="伍、名詞解釋：" body="（略）"  />
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={6}>
    <PanelView title="陸、其他：" body="所附證明文件如為影本，需蓋與正本相符章。"  />
    </Col>
    <Col xs={12} md={6}>
        <Panel bsStyle="primary">
            <Panel.Heading>
            <Panel.Title componentClass="h3">柒、作業內容：</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <h4>流程圖：如後附件。</h4>
            <DownloadLink url="https://www.wratb.gov.tw/media/2000/公寓大廈管理公共基金-計算表.pdf" name="公寓大廈管理公共基金、計算表.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1999/使用執照核發審查作業流程圖.pdf" name="使用執照核發審查作業流程圖.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1998/使照申請書.pdf" name="使照申請書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1997/委託書.pdf" name="委託書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1996/建築物概要表.pdf" name="建築物概要表.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1995/按圖施工證明書.pdf" name="按圖施工證明書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1994/挑空清冊及結構安全報告書.pdf" name="挑空清冊及結構安全報告書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1993/修改竣工圖併案變更設計申請書.pdf" name="修改竣工圖併案變更設計申請書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1992/起造人名冊.pdf" name="起造人名冊.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1991/損鄰陳情住戶名冊.pdf" name="損鄰陳情住戶名冊.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1990/監造證明書.pdf" name="監造證明書.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1989/營造業承攬工程竣工查報表.pdf" name="營造業承攬工程竣工查報表.pdf" />
            <DownloadLink url="https://www.wratb.gov.tw/media/1988/領得建造-雜項-執照建築基地入侵紅火蟻現場清查紀錄表.pdf" name="領得建造(雜項)執照建築基地入侵紅火蟻現場清查紀錄表.pdf" />
            </Panel.Body>
        </Panel>
    </Col>
</Row>
</ div>
case '使用執照更正':
return <div className='marginWrap'>
<PageHeader>
    {id} <small onClick={this.clickHandler}>回上一頁</small>
</PageHeader>
<Row>
    <Col xs={12} md={6}>
        <PanelView title="壹、目的：" body="使用執照圖說有所筆誤時應予更正，以確保使用執照內容之真實。" />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="貳、相關法令及規定：" body='略。' />
    </Col>
</Row>
<Row>
    <Col xs={12} md={6}>
    <PanelView title="參、民眾應附證件、書表、表單、附件：" body="1.申請書（更正理由、使用執照年度字號及申請人姓名、住址、電話應詳實填載）。 
2.更正後使用執照申請書（填寫更正後所有原申請書內容並由申請人簽章，如涉圖說更正並需會同建築師簽章）。 
3.更正內容說明書（僅容許筆誤或漏列更正可併於申請書內敘明，說明更正前後內容）。 
4.如係為圖說筆誤或漏列，檢具更正後之圖說三份（建築師需核章且更正處明顯標示）。 
5.產權證明文件（為辦理產權登記前不必檢附）。 
6.門牌整編證明（若產權證明文件上之地址與使用執照所登記不符時需檢附）。"  />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="肆、內部作業使用表單附件：" body="(略)"  />
    </Col>
</Row>
<Row>
<Col xs={12} md={6}>
    <PanelView title="伍、名詞解釋：" body="1.產權證明文件：建物登記簿謄本，建物所有權狀或土地登記簿謄本（向當地地政事務所申請）。
2.使門牌整編證明：向當地戶政事務所申請。"  />
    </Col>
    <Col xs={12} md={6}>
    <PanelView title="陸、其他：" body="本項業務不適合辦理非筆誤或漏列之使用執照內容更改。"  />
    </Col>
</Row>
</ div>
            default :
            return <div style={this.div33widthStyle}><PageHeader>
            {id} <small onClick={this.clickHandler}>回上一頁</small>
        </PageHeader></div>
        
        }
        
    }

}
export default ArchView