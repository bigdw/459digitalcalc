/* ─────────────────────────────────────────
   CPM CALCULATOR — app.js
───────────────────────────────────────── */

// ── DEFAULT PRODUCTS ──────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  // ── Audio ──
  { id: 'p001', name: 'Addressable Streaming Audio', categories: ['Audio'], vendor: 'Platform X', cpm: 38.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p002', name: 'Streaming Audio', categories: ['Audio'], vendor: 'Platform X', cpm: 35.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  // ── CTV / OTT ──
  { id: 'p003', name: 'Addressable CTV 100', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 40.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p004', name: 'Addressable CTV 65', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 30.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p005', name: 'Addressable CTV 90', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 36.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p006', name: 'CTV 100', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 37.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p007', name: 'CTV 65', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 27.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p008', name: 'CTV 90', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 33.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p009', name: 'Premium CTV (Hulu, Paramount+, Peacock, Max, Discovery+, Disney+)', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 66.0, minImpressions: 0, minSpend: 1000, specs: 'Hulu, Paramount+, Peacock, Max, Discovery+, Disney+', notes: 'Nexstar minimum $1,000/month; no guarantees of delivery on each network' },
  { id: 'p010', name: 'Streaming+ (HuluLive, Philo, SlingTV, RokuTV, Fubo)', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 42.0, minImpressions: 0, minSpend: 1000, specs: 'HuluLive, Philo, SlingTV, RokuTV, Fubo', notes: 'Nexstar minimum $1,000/month; up to 10% on HuluLive' },
  { id: 'p011', name: 'Spanish Language OTT', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 48.0, minImpressions: 0, minSpend: 1000, specs: '', notes: 'Nexstar minimum $1,000/month' },
  { id: 'p012', name: 'Streaming Sports: Sports OTT - Live and On Demand', categories: ['CTV / OTT', 'Video'], vendor: 'Platform X', cpm: 60.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p013', name: 'Fox 59 Now CTV App', categories: ['CTV / OTT', 'Fox59', 'Video'], vendor: 'Core', cpm: 20.0, minImpressions: 0, minSpend: 0, specs: 'AppleTV, FireTV, Roku, Samsung', notes: 'Fox 59 Now - Video spot placements on AppleTV, FireTV, Roku, Samsung' },
  // ── Live Sports ──
  { id: 'p014', name: 'Live Sports RON (no game level or sport type)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 75.0, minImpressions: 0, minSpend: 1000, specs: '', notes: 'Nexstar minimum $1,000/month; no game level or sport type' },
  { id: 'p015', name: 'Live Sports - Basketball (Regular Season, Now-Apr 2026)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 108.0, minImpressions: 0, minSpend: 1000, specs: 'Regular Season, Now-Apr 2026', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p016', name: 'Live Sports - March Mania (Mar 15-Apr 6, 2026)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 155.0, minImpressions: 0, minSpend: 1000, specs: 'Mar 15-Apr 6, 2026', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p017', name: 'Live Sports - Olympics (Feb 6-22, 2026)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 122.0, minImpressions: 0, minSpend: 1000, specs: 'Feb 6-22, 2026', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p018', name: 'Live Sports - Soccer (Regular Season, Feb-Oct 2026)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 65.0, minImpressions: 0, minSpend: 1000, specs: 'Regular Season, Feb-Oct 2026', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p019', name: 'Live Sports - Hockey (NHL Regular Season, Now-Apr 2026)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 87.0, minImpressions: 0, minSpend: 1000, specs: 'Regular Season, Now-Apr 2026', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p020', name: 'Live Sports - Motorsports (Feb-Nov)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 70.0, minImpressions: 0, minSpend: 1000, specs: 'Feb-Nov', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p021', name: 'Live Sports - Baseball/MLB (Mar-Sep Regular Season)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 82.0, minImpressions: 0, minSpend: 1000, specs: 'Mar-Sep Regular Season', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p022', name: 'Live Sports - Golf (Jan-Aug)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 77.0, minImpressions: 0, minSpend: 1000, specs: 'Jan-Aug', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  { id: 'p023', name: 'Live Sports - Tennis (Jan-Sep)', categories: ['CTV / OTT', 'Live Sports', 'Video'], vendor: 'Platform X', cpm: 88.0, minImpressions: 0, minSpend: 1000, specs: 'Jan-Sep', notes: '$1,000/month minimum; delivery not guaranteed; geo-target only' },
  // ── Display ──
  { id: 'p024', name: 'Addressable Display', categories: ['Display'], vendor: 'Platform X', cpm: 14.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p025', name: 'Display', categories: ['Display'], vendor: 'Platform X', cpm: 9.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p026', name: 'GeoFence', categories: ['Display'], vendor: 'Platform X', cpm: 12.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p027', name: 'Keyword Display', categories: ['Display'], vendor: 'Platform X', cpm: 12.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p028', name: 'Run-of-Site Display Ads', categories: ['Display', 'Fox59'], vendor: 'Core', cpm: 8.0, minImpressions: 0, minSpend: 0, specs: '300x250, 728x90, 320x50, 300x600', notes: '300x250/728x90/320x50/300x600' },
  { id: 'p029', name: 'Run-of-Site Billboard', categories: ['Display', 'Fox59'], vendor: 'Core', cpm: 12.0, minImpressions: 0, minSpend: 0, specs: '970x250', notes: '970x250' },
  { id: 'p030', name: 'Run-of-Site Expandable/Retractable Units', categories: ['Display', 'Fox59'], vendor: 'Core', cpm: 12.0, minImpressions: 0, minSpend: 0, specs: '300x250, 728x90', notes: '300x250/728x90' },
  { id: 'p031', name: 'Run-of-Site Display w/ In-Banner Video', categories: ['Display', 'Fox59', 'Video'], vendor: 'Core', cpm: 15.0, minImpressions: 0, minSpend: 0, specs: 'In-Banner Video', notes: 'In-Banner Video' },
  { id: 'p032', name: 'Point-of-Entry Takeover Display Ads', categories: ['Display', 'Fox59'], vendor: 'Core', cpm: 12.0, minImpressions: 0, minSpend: 0, specs: '970x250, 728x90, 300x250, 300x600, 320x50', notes: '970x250/728x90/300x250/300x600/320x50' },
  { id: 'p033', name: 'Social Display Ads across Website & News App', categories: ['Display', 'Fox59'], vendor: 'Core', cpm: 11.0, minImpressions: 0, minSpend: 0, specs: '300x250 Only', notes: '300x250 Only' },
  { id: 'p035', name: 'NAN - Display CPM RON', categories: ['Audience Network', 'Display'], vendor: 'Nexstar', cpm: 6.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Campaigns can target audiences by geography' },
  // ── DOOH ──
  { id: 'p036', name: 'DOOH - Display', categories: ['Digital Out Of Home'], vendor: 'Platform X', cpm: 20.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  { id: 'p037', name: 'DOOH - Video', categories: ['Digital Out Of Home'], vendor: 'Platform X', cpm: 31.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  // ── Video ──
  { id: 'p038', name: 'Addressable PreRoll', categories: ['Video'], vendor: 'Platform X', cpm: 25.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p039', name: 'GeoVideo', categories: ['Video'], vendor: 'Platform X', cpm: 22.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p040', name: 'Keyword PreRoll', categories: ['Video'], vendor: 'Platform X', cpm: 24.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p041', name: 'PreRoll', categories: ['Video'], vendor: 'Platform X', cpm: 22.0, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month display; no minimum for geofence' },
  { id: 'p042', name: 'Run-of-Site Preroll', categories: ['Fox59', 'Video'], vendor: 'Core', cpm: 25.0, minImpressions: 0, minSpend: 0, specs: ':15 or less', notes: ':15 or less' },
  { id: 'p043', name: 'LiveStreaming', categories: ['Fox59', 'Video'], vendor: 'Core', cpm: 25.0, minImpressions: 0, minSpend: 0, specs: ':15 or less', notes: ':15 or less' },
  { id: 'p044', name: 'NAN - Video CPM RON', categories: ['Audience Network', 'Video'], vendor: 'Nexstar', cpm: 20.0, minImpressions: 0, minSpend: 0, specs: 'OLV, livestream, outstream', notes: 'Video everywhere includes OLV, livestream and outstream sizes across website and News app' },
  { id: 'p045', name: 'NAN - Video OTT/CTV CPM RON', categories: ['Audience Network', 'CTV / OTT', 'Video'], vendor: 'Nexstar', cpm: 25.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Delivers to all OTT/CTV end points across Station O&O, The Hill and NewsNation' },
  { id: 'p046', name: 'YouTube (CPCV)', categories: ['Video'], vendor: 'Platform X', cpm: 0.1, minImpressions: 0, minSpend: 500, specs: '', notes: 'Nexstar minimum $500/month' },
  // ── Email ──
  { id: 'p047', name: 'Email Marketing', categories: ['Email'], vendor: 'Platform X', cpm: 25.0, minImpressions: 50000, minSpend: 0, specs: '', notes: 'Minimum COG $300 on initial or resend; minimum list 50,000' },
  { id: 'p048', name: 'Email Marketing (Postal File)', categories: ['Email'], vendor: 'Platform X', cpm: 30.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'No minimum' },
  // ── Amazon ──
  { id: 'p049', name: 'Amazon O&O Premium: Prime Video + STV First Access', categories: ['Amazon', 'CTV / OTT', 'Video'], vendor: 'IQx ShopIQ', cpm: 48.0, minImpressions: 0, minSpend: 5000, specs: '', notes: 'Minimum $5,000/month with 3-month minimum' },
  { id: 'p050', name: 'Amazon STV Performance: STV + Display', categories: ['Amazon', 'CTV / OTT', 'Video'], vendor: 'IQx ShopIQ', cpm: 24.0, minImpressions: 0, minSpend: 4000, specs: '', notes: 'Minimum $4,000/month with 3-month minimum' },
  { id: 'p051', name: 'Amazon STV Efficiency: STV + OLV', categories: ['Amazon', 'CTV / OTT', 'Video'], vendor: 'IQx ShopIQ', cpm: 26.0, minImpressions: 0, minSpend: 2500, specs: '', notes: 'Minimum $2,500/month with 3-month minimum' },
  { id: 'p052', name: 'STV Premium: PrimeVideo, YTTV, Discovery+, Peacock, MAX, Hulu/Disney, Netflix', categories: ['Amazon', 'CTV / OTT', 'Video'], vendor: 'IQx ShopIQ', cpm: 70.0, minImpressions: 0, minSpend: 10000, specs: 'PrimeVideo, YTTV, Discovery+, Peacock, MAX, Hulu/Disney, Netflix', notes: 'Minimum $10,000/month with 3-month minimum' },
  { id: 'p053', name: 'Amazon Display', categories: ['Amazon', 'Display'], vendor: 'IQx ShopIQ', cpm: 11.0, minImpressions: 0, minSpend: 1000, specs: '', notes: 'Minimum $1,000/month with 3-month minimum' },
  { id: 'p054', name: 'Amazon Online Digital Video (Amazon, Amazon Publisher Direct, DV360)', categories: ['Amazon', 'Video'], vendor: 'IQx ShopIQ', cpm: 19.0, minImpressions: 0, minSpend: 1000, specs: 'Amazon, Amazon Publisher Direct, DV360', notes: 'Minimum $1,000/month with 3-month minimum' },
  // ── Amazon Add-ons (hidden — shown only in Package Builder) ──
  { id: 'p055', name: 'AMC MatchBack Add-on: Leads Report', categories: ['Amazon'], vendor: 'IQx ShopIQ', cpm: 1.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Requires $10,000/month minimum regardless of base product. Quarterly IO: 3-month min or $30k. Monthly: $20k/month min.', type: 'addon', addonFor: 'Amazon', addonMinSpend: 10000 },
  { id: 'p056', name: 'AMC MatchBack Add-on: ROI Report', categories: ['Amazon'], vendor: 'IQx ShopIQ', cpm: 1.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Requires $10,000/month minimum regardless of base product. Quarterly IO: 3-month min or $30k. Monthly: $20k/month min.', type: 'addon', addonFor: 'Amazon', addonMinSpend: 10000 },
  // ── YouTube TV ──
  { id: 'p057', name: 'YouTube TV (RON) :15 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 69.0, minImpressions: 0, minSpend: 5000, specs: ':15', notes: 'Minimum $5k/month for 3 months' },
  { id: 'p058', name: 'YouTube TV (RON) :30 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 87.0, minImpressions: 0, minSpend: 5000, specs: ':30', notes: 'Minimum $5k/month for 3 months' },
  { id: 'p059', name: 'YouTube TV (RON) :60 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 157.0, minImpressions: 0, minSpend: 5000, specs: ':60', notes: 'Minimum $5k/month for 3 months' },
  { id: 'p060', name: 'YouTube TV (RON - Sports) :15 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 99.0, minImpressions: 0, minSpend: 5000, specs: ':15', notes: 'Minimum $5k/month for 3 months' },
  { id: 'p061', name: 'YouTube TV (RON - Sports) :30 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 117.0, minImpressions: 0, minSpend: 5000, specs: ':30', notes: 'Minimum $5k/month for 3 months' },
  { id: 'p062', name: 'YouTube TV (RON - Sports) :60 Non-Skip', categories: ['CTV / OTT', 'Video', 'YouTube TV'], vendor: 'IQx ShopIQ', cpm: 215.0, minImpressions: 0, minSpend: 5000, specs: ':60', notes: 'Minimum $5k/month for 3 months' },
  // ── V Digital ──
  { id: 'p063', name: 'VDS Digital Audio', categories: ['Audio'], vendor: 'V Digital', cpm: 38.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p064', name: 'VDS Preroll Video AT', categories: ['Video'], vendor: 'V Digital', cpm: 22.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p065', name: 'VDS Display AT', categories: ['Display'], vendor: 'V Digital', cpm: 12.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p066', name: 'VDS Display Device ID', categories: ['Display'], vendor: 'V Digital', cpm: 18.0, minImpressions: 120000, minSpend: 0, specs: '', notes: 'Min 120,000 impressions total; pre-sale audit required' },
  { id: 'p067', name: 'VDS Display Device ID AT', categories: ['Display'], vendor: 'V Digital', cpm: 20.0, minImpressions: 120000, minSpend: 0, specs: '', notes: 'Min 120,000 impressions total; pre-sale audit required' },
  { id: 'p068', name: 'VDS CTV', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 35.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p069', name: 'VDS CTV AT', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 40.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p070', name: 'VDS CTV 90/OTT 10', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 32.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p071', name: 'VDS CTV 90/OTT 10 AT', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 38.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p072', name: 'VDS CTV 65/OTT 30', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 30.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  { id: 'p073', name: 'VDS CTV 65/OTT 30 AT', categories: ['CTV / OTT', 'Video'], vendor: 'V Digital', cpm: 32.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Only available for agencies with spend over $150k' },
  // ── WeatherCo ──
  { id: 'p074', name: 'WeatherCo Mobile APP ROS 300x250', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 10.0, minImpressions: 0, minSpend: 0, specs: '300x250', notes: '' },
  { id: 'p075', name: 'WeatherCo Mobile APP ROS 320x50', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 5.0, minImpressions: 0, minSpend: 0, specs: '320x50', notes: '' },
  { id: 'p076', name: 'WeatherCo Mobile APP Home Screen 320x50', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 6.0, minImpressions: 0, minSpend: 0, specs: '320x50', notes: '' },
  { id: 'p077', name: 'WeatherCo Mobile APP Preroll ROS', categories: ['Video', 'Weather'], vendor: 'Weather Co.', cpm: 22.0, minImpressions: 0, minSpend: 0, specs: ':15 or :30', notes: 'Mobile app only; geo-targeting only' },
  { id: 'p078', name: 'WeatherCo Web (Desktop/MW) ROS 728x90, 300x600', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 14.0, minImpressions: 0, minSpend: 0, specs: '728x90, 300x600', notes: '' },
  { id: 'p079', name: 'WeatherCo Web (Desktop/MW) ROS 300x250', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 14.0, minImpressions: 0, minSpend: 0, specs: '300x250', notes: '' },
  { id: 'p080', name: 'WeatherCo Web (Desktop) Billboard', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 14.0, minImpressions: 0, minSpend: 0, specs: 'Desktop billboard', notes: '' },
  { id: 'p081', name: 'WeatherCo Mobile Integrated Marquee', categories: ['Display', 'Weather'], vendor: 'Weather Co.', cpm: 17.0, minImpressions: 0, minSpend: 0, specs: 'Mobile App Only', notes: 'MINIMUM $100,000 retail; non-cancelable; Mobile App Only' },
  // ── Weather Add-ons (hidden — shown only in Package Builder) ──
  { id: 'p082', name: 'Weather CO Add-on: Weather Conditions', categories: ['Display', 'Video'], vendor: 'Weather Co.', cpm: 3.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Add CPM to digital product using same WO Digital Product', type: 'addon', addonFor: 'Weather Co.' },
  { id: 'p083', name: 'Weather CO Add-on: 3P Data', categories: ['Display', 'Video'], vendor: 'Weather Co.', cpm: 4.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Add CPM to digital product using same WO Digital Product', type: 'addon', addonFor: 'Weather Co.' },
  { id: 'p084', name: 'Weather CO Add-on: 1P Data', categories: ['Display', 'Video'], vendor: 'Weather Co.', cpm: 4.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Add CPM to digital product using same WO Digital Product', type: 'addon', addonFor: 'Weather Co.' },
  // ── Nexstar / Audience Network ──
  { id: 'p093', name: 'NAN - Display CPM RON', categories: ['Audience Network', 'Display'], vendor: 'Nexstar', cpm: 6.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Campaigns can target audiences by geography' },
  { id: 'p094', name: 'NAN - Video CPM RON', categories: ['Audience Network', 'Video'], vendor: 'Nexstar', cpm: 20.0, minImpressions: 0, minSpend: 0, specs: 'OLV, livestream, outstream', notes: 'Video everywhere includes OLV, livestream and outstream sizes across website and News app' },
  { id: 'p095', name: 'NAN - Video OTT/CTV CPM RON', categories: ['Audience Network', 'CTV / OTT', 'Video'], vendor: 'Nexstar', cpm: 25.0, minImpressions: 0, minSpend: 0, specs: '', notes: 'Delivers to all OTT/CTV end points across Station O&O, The Hill and NewsNation' },
];

// ── STATE ──────────────────────────────────────────────────────────────
let products = [];
let editingId = null;
let solveFor = 'cpm';
let sortDir = 'asc';
let sortField = 'name';
let calcProductId = null; // tracks which product is loaded in the calculator

// ── STORAGE ────────────────────────────────────────────────────────────
// DATA_VERSION is auto-computed from the product list — never edit manually.
// Any change to product IDs, names, CPMs, categories, or type triggers a cache reset.
const DATA_VERSION = (function() {
  const salt = 'v8'; // bump this string to force a cache reset for all users
  const str = salt + DEFAULT_PRODUCTS.map(p => p.id + p.name + p.cpm + (p.categories||[]).join() + (p.type||'') + (p.addonMinSpend||0)).join('|');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return String(hash >>> 0);
})();

function loadProducts() {
  try {
    const version = localStorage.getItem('cpm_version');
    const raw = localStorage.getItem('cpm_products');
    if (raw && version === DATA_VERSION) {
      products = JSON.parse(raw);
    } else {
      products = DEFAULT_PRODUCTS.map(p => ({ ...p }));
      saveProducts();
    }
  } catch {
    products = DEFAULT_PRODUCTS.map(p => ({ ...p }));
  }
}

function saveProducts() {
  localStorage.setItem('cpm_products', JSON.stringify(products));
  localStorage.setItem('cpm_version', DATA_VERSION);
}

function genId() {
  return 'p' + Date.now() + Math.random().toString(36).slice(2, 6);
}

// ── TAB NAVIGATION ────────────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelector('[data-tab="' + tab + '"]').classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  if (tab === 'calculator') renderQuickFill();
  if (tab === 'compare') renderCompare();
  if (tab === 'package') renderPackagePicker();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ── PRODUCTS TAB ──────────────────────────────────────────────────────
function getCategories() {
  return [...new Set(products.filter(p => p.type !== 'addon').flatMap(p => p.categories || []).filter(Boolean))].sort();
}

function updateCategoryFilter() {
  const sel = document.getElementById('filterCategory');
  const cur = sel.value;
  const cats = getCategories();
  sel.innerHTML = '<option value="">All Categories</option>' +
    cats.map(c => `<option value="${c}" ${c === cur ? 'selected' : ''}>${c}</option>`).join('');
  const dl = document.getElementById('categoryList');
  dl.innerHTML = cats.map(c => `<option value="${c}"></option>`).join('');
}

function renderProducts() {
  const search = document.getElementById('searchProducts').value.toLowerCase();
  const catFilter = document.getElementById('filterCategory').value;
  updateCategoryFilter();

  let filtered = products.filter(p => {
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search) ||
      (p.categories || []).some(c => c.toLowerCase().includes(search)) ||
      (p.notes || '').toLowerCase().includes(search);
    const matchCat = !catFilter || (p.categories || []).includes(catFilter);
    return matchSearch && matchCat;
  });

  filtered.sort((a, b) => {
    let av = sortField === 'cpm' ? a.cpm : (a[sortField] || '').toString().toLowerCase();
    let bv = sortField === 'cpm' ? b.cpm : (b[sortField] || '').toString().toLowerCase();
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const grid = document.getElementById('productsGrid');

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">&#128205;</div><div>${products.length === 0 ? 'No products yet.' : 'No products match your filters.'}</div></div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.03}s">
      <div class="product-card-header">
        <div class="product-name">${escHtml(p.name)}</div>
        <div class="product-badges">
          ${p.vendor ? `<span class="product-vendor-badge ${vendorClass(p.vendor)}">${escHtml(p.vendor)}</span>` : ''}
          ${[...(p.categories||[])].sort((a,b) => a==='Fox59' ? -1 : b==='Fox59' ? 1 : a.localeCompare(b)).map(c => `<span class="product-category-badge ${categoryClass(c)}">${escHtml(c)}</span>`).join('')}
        </div>
      </div>
      <div class="product-cpm">$${formatCpm(p.cpm)}</div>
      <div class="product-cpm-label">CPM</div>
      <div class="product-meta">
        ${p.specs ? `<span>&#128208; ${escHtml(p.specs)}</span>` : ''}
        ${p.minImpressions ? `<span>&#128202; Min ${formatNum(p.minImpressions)} imps</span>` : ''}
        ${p.notes ? `<span>&#128221; ${escHtml(p.notes)}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="product-btn" onclick="fillCalc('${p.id}')">&#9889; Use in Calc</button>
        <button class="product-btn pkg-add-btn" onclick="addToPackageFromProduct('${p.id}')">&#43; Add to Package</button>
      </div>
    </div>
  `).join('');
}

document.getElementById('sortToggle').addEventListener('click', function () {
  const fields = ['name', 'cpm', 'category'];
  const idx = fields.indexOf(sortField);
  if (sortDir === 'asc') {
    sortDir = 'desc';
  } else {
    sortField = fields[(idx + 1) % fields.length];
    sortDir = 'asc';
  }
  const labels = { name: 'Name', cpm: 'CPM', category: 'Category' };
  const arrows = { asc: 'up', desc: 'down' };
  this.textContent = `Sort: ${labels[sortField]} ${arrows[sortDir]}`;
  renderProducts();
});

document.getElementById('searchProducts').addEventListener('input', renderProducts);
document.getElementById('filterCategory').addEventListener('change', renderProducts);

// ── MODAL (kept dormant, no UI trigger) ───────────────────────────────
function openModal() { document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  editingId = null;
  clearModalForm();
}
function clearModalForm() {
  ['formName','formCategory','formCpm','formMinImpressions','formSpecs','formNotes']
    .forEach(id => document.getElementById(id).value = '');
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.getElementById('modalSave').addEventListener('click', () => {
  const name = document.getElementById('formName').value.trim();
  const cpmVal = parseFloat(document.getElementById('formCpm').value);
  if (!name) { toast('Product name is required', 'error'); return; }
  if (isNaN(cpmVal) || cpmVal < 0) { toast('Please enter a valid CPM', 'error'); return; }
  const data = {
    name,
    category: document.getElementById('formCategory').value.trim(),
    cpm: cpmVal,
    minImpressions: parseInt(document.getElementById('formMinImpressions').value) || 0,
    specs: document.getElementById('formSpecs').value.trim(),
    notes: document.getElementById('formNotes').value.trim(),
  };
  if (editingId) {
    const idx = products.findIndex(p => p.id === editingId);
    if (idx !== -1) products[idx] = { ...products[idx], ...data };
    toast('Product updated', 'success');
  } else {
    products.push({ id: genId(), ...data });
    toast('Product added', 'success');
  }
  saveProducts();
  renderProducts();
  closeModal();
});

// ── CALCULATOR TAB ────────────────────────────────────────────────────
function setSolveFor(field) {
  solveFor = field;
  document.querySelectorAll('.solve-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === field);
  });
  document.querySelectorAll('.field-badge').forEach(badge => {
    badge.textContent = badge.closest('.calc-field')?.id === 'field-' + field ? 'solve' : '';
  });
  document.querySelectorAll('.formula-part').forEach(part => {
    part.classList.toggle('solving', part.dataset.field === field);
  });
  ['cpm','cost','impressions'].forEach(f => {
    const inp = document.getElementById('input-' + f);
    inp.disabled = (f === field);
    inp.closest('.input-row').classList.toggle('disabled', f === field);
    if (f === field) inp.value = '';
  });
  clearResult();
}

function fillCalc(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  calcProductId = id;

  // Set CPM and switch to "Solve for Cost" so user enters impressions to get spend
  setSolveFor('cost');
  document.getElementById('input-cpm').value = p.cpm;

  // Update context banner
  document.getElementById('calcContextName').textContent = p.name + ' ($' + formatCpm(p.cpm) + ' CPM)';
  document.getElementById('calcContext').classList.add('active');

  switchTab('calculator');
  renderQuickFill();
  toast('Loaded: ' + p.name);
}

document.getElementById('calcContextClear').addEventListener('click', () => {
  calcProductId = null;
  document.getElementById('calcContext').classList.remove('active');
  document.getElementById('calcContextName').textContent = '';
  setSolveFor('cpm');
  ['cpm','cost','impressions'].forEach(f => {
    document.getElementById('input-' + f).value = '';
  });
  clearResult();
});

document.querySelectorAll('.solve-btn').forEach(btn => {
  btn.addEventListener('click', () => setSolveFor(btn.dataset.target));
});

document.getElementById('calcSolve').addEventListener('click', calculate);
document.getElementById('calcClear').addEventListener('click', () => {
  ['cpm','cost','impressions'].forEach(f => {
    const inp = document.getElementById('input-' + f);
    if (!inp.disabled) inp.value = '';
  });
  clearResult();
});

['input-cpm','input-cost','input-impressions'].forEach(id => {
  document.getElementById(id).addEventListener('keydown', e => {
    if (e.key === 'Enter') calculate();
  });
});

function calculate() {
  const get = id => {
    const v = parseFloat(document.getElementById('input-' + id).value);
    return isNaN(v) ? null : v;
  };

  if (solveFor === 'cpm') {
    const cost = get('cost'), imps = get('impressions');
    if (cost === null || imps === null) { toast('Enter Cost and Impressions', 'error'); return; }
    if (imps === 0) { toast('Impressions cannot be zero', 'error'); return; }
    const cpm = (cost / imps) * 1000;
    document.getElementById('input-cpm').value = cpm.toFixed(2);
    showResult('CPM', '$' + formatCpm(cpm), 'Based on $' + formatMoney(cost) + ' spend across ' + formatNum(imps) + ' impressions');

  } else if (solveFor === 'cost') {
    const cpm = get('cpm'), imps = get('impressions');
    if (cpm === null || imps === null) { toast('Enter CPM and Impressions', 'error'); return; }
    const cost = (cpm / 1000) * imps;
    document.getElementById('input-cost').value = cost.toFixed(2);
    const costWarn = calcProductId ? getMinSpendWarning(products.find(p => p.id === calcProductId), cost) : '';
    showResult('Total Cost', '$' + formatMoney(cost), 'At $' + formatCpm(cpm) + ' CPM for ' + formatNum(imps) + ' impressions', costWarn);

  } else if (solveFor === 'impressions') {
    const cpm = get('cpm'), cost = get('cost');
    if (cpm === null || cost === null) { toast('Enter CPM and Cost', 'error'); return; }
    if (cpm === 0) { toast('CPM cannot be zero', 'error'); return; }
    const imps = (cost / cpm) * 1000;
    document.getElementById('input-impressions').value = Math.round(imps);
    const impsWarn = calcProductId ? getMinSpendWarning(products.find(p => p.id === calcProductId), cost) : '';
    showResult('Impressions', formatNum(Math.round(imps)), 'At $' + formatCpm(cpm) + ' CPM with $' + formatMoney(cost) + ' budget', impsWarn);
  }
}

function getMinSpendWarning(p, spend) {
  if (!p || !p.minSpend || spend <= 0) return '';
  if (spend < p.minSpend) return `Minimum monthly spend for ${p.name} is $${formatMoney(p.minSpend)}. Current: $${formatMoney(spend)}.`;
  return '';
}

function showResult(label, value, sub, warning) {
  const el = document.getElementById('calcResult');
  const warnHtml = warning ? `<div class="result-warning">&#9888; ${warning}</div>` : '';
  el.innerHTML = `<div class="result-label">${label}</div><div class="result-value">${value}</div><div class="result-sub">${sub}</div>${warnHtml}`;
  el.classList.add('visible');
  // On mobile, scroll result into view after a brief paint delay
  if (window.innerWidth <= 768) {
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
}

function clearResult() {
  const el = document.getElementById('calcResult');
  el.classList.remove('visible');
  el.innerHTML = '';
}

function renderQuickFill() {
  const list = document.getElementById('quickFillList');
  const catSel = document.getElementById('quickFillCategory');

  // Populate category dropdown
  if (catSel) {
    const cur = catSel.value;
    const cats = getCategories();
    catSel.innerHTML = '<option value="">All Categories</option>' +
      cats.map(c => `<option value="${c}" ${c === cur ? 'selected' : ''}>${c}</option>`).join('');
  }

  if (products.length === 0) {
    list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;">No products yet.</div>';
    return;
  }

  const selectedCat = catSel ? catSel.value : '';
  const filtered = [...products]
    .filter(p => !selectedCat || (p.categories||[]).includes(selectedCat))
    .sort((a, b) => a.name.localeCompare(b.name));

  list.innerHTML = filtered.length === 0
    ? '<div style="color:var(--text-muted);font-size:12px;padding:8px 0;">No products in this category.</div>'
    : filtered.map(p => `
      <div class="quick-fill-item ${calcProductId === p.id ? 'active' : ''}" onclick="fillCalc('${p.id}')">
        <div class="qf-left">
          <span class="qf-name">${escHtml(p.name)}</span>
          ${p.vendor ? `<span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 6px;margin-top:3px;display:inline-block;">${escHtml(p.vendor)}</span>` : ''}
        </div>
        <span class="qf-cpm">$${formatCpm(p.cpm)}</span>
      </div>
    `).join('');
}

function quickFill(id) {
  fillCalc(id);
}

// ── MOBILE PACKAGE SEARCH ────────────────────────────────────────────
function renderMobilePkgList() {
  const listEl = document.getElementById('mobilePkgList');
  if (!listEl) return;
  const search = (document.getElementById('mobilePkgSearch').value || '').toLowerCase();
  const inPackage = new Set(packageItems.map(i => i.productId));

  const filtered = products
    .filter(p => p.type !== 'addon')
    .filter(p => !search ||
      p.name.toLowerCase().includes(search) ||
      (p.categories || []).some(c => c.toLowerCase().includes(search)) ||
      (p.vendor || '').toLowerCase().includes(search)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="mobile-product-empty">No products match.</div>';
    return;
  }

  listEl.innerHTML = filtered.map(p => {
    const added = inPackage.has(p.id);
    return `<div class="mobile-product-item ${added ? 'active' : ''}"
      onclick="mobilePkgToggle('${p.id}')">
      <div class="mobile-product-item-name">${escHtml(p.name)}</div>
      <div class="mobile-product-item-meta">
        <span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 5px;">${escHtml(p.vendor)}</span>
        <span class="mobile-product-item-cpm">$${formatCpm(p.cpm)} CPM</span>
        <span class="mobile-pkg-status">${added ? '&#10003; Added' : '&#43; Add'}</span>
      </div>
    </div>`;
  }).join('');
}

function mobilePkgToggle(id) {
  const idx = packageItems.findIndex(i => i.productId === id);
  if (idx !== -1) {
    packageItems.splice(idx, 1);
  } else {
    packageItems.push({ productId: id, budget: 0 });
  }
  renderMobilePkgList();
  renderPackagePicker(); // keeps desktop picker in sync
}

// ── MOBILE PRODUCT SELECTOR ───────────────────────────────────────────
function renderMobileProductList() {
  const listEl = document.getElementById('mobileProductList');
  if (!listEl) return;
  const search = (document.getElementById('mobileProductSearch').value || '').toLowerCase();

  const filtered = products
    .filter(p => p.type !== 'addon')
    .filter(p => !search ||
      p.name.toLowerCase().includes(search) ||
      (p.categories || []).some(c => c.toLowerCase().includes(search)) ||
      (p.vendor || '').toLowerCase().includes(search)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="mobile-product-empty">No products match.</div>';
    return;
  }

  listEl.innerHTML = filtered.map(p => `
    <div class="mobile-product-item ${calcProductId === p.id ? 'active' : ''}"
      onclick="fillCalc('${p.id}'); document.getElementById('mobileProductSearch').value=''; renderMobileProductList();
renderMobilePkgList();">
      <div class="mobile-product-item-name">${escHtml(p.name)}</div>
      <div class="mobile-product-item-meta">
        <span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 5px;">${escHtml(p.vendor)}</span>
        <span class="mobile-product-item-cpm">$${formatCpm(p.cpm)} CPM</span>
      </div>
    </div>
  `).join('');
}

// ── COMPARE TAB ───────────────────────────────────────────────────────
let selectedForCompare = new Set();

function renderCompare() {
  const list = document.getElementById('compareProductList');
  const catSel = document.getElementById('compareCategory');

  // Capture current value BEFORE rebuilding options
  const cur = catSel ? catSel.value : '';
  if (catSel) {
    const cats = getCategories();
    catSel.innerHTML = '<option value="">All Categories</option>' +
      cats.map(c => `<option value="${c}" ${c === cur ? 'selected' : ''}>${c}</option>`).join('');
    // Restore the selection explicitly after innerHTML rebuild
    catSel.value = cur;
  }

  const selectedCat = cur;
  const sorted = [...products]
    .filter(p => p.type !== 'addon' && (!selectedCat || (p.categories||[]).includes(selectedCat)))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (sorted.length === 0) {
    list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:8px 0;">No products match.</div>';
  } else {
    list.innerHTML = sorted.map(p => `
      <label class="compare-check-item ${selectedForCompare.has(p.id) ? 'selected' : ''}">
        <input type="checkbox" value="${p.id}" ${selectedForCompare.has(p.id) ? 'checked' : ''} onchange="toggleCompare('${p.id}', this.checked)" />
        <span class="cc-info">
          <span class="cc-name">${escHtml(p.name)}</span>
          ${p.vendor ? `<span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 6px;margin:2px 0;display:inline-block;align-self:flex-start;">${escHtml(p.vendor)}</span>` : ''}
          ${(p.categories||[]).length ? `<span class="cc-cat">${escHtml((p.categories).join(', '))}</span>` : ''}
        </span>
        <span class="cc-cpm">$${formatCpm(p.cpm)}</span>
      </label>
    `).join('');
  }
  renderCompareTable();
}

function toggleCompare(id, checked) {
  if (checked) selectedForCompare.add(id);
  else selectedForCompare.delete(id);
  document.querySelectorAll('.compare-check-item').forEach(el => {
    const cb = el.querySelector('input[type=checkbox]');
    el.classList.toggle('selected', cb && cb.checked);
  });
  renderCompareTable();
}

function removeFromCompare(id) {
  selectedForCompare.delete(id);
  renderCompare();
}

document.getElementById('compareBudget').addEventListener('input', renderCompareTable);

function renderCompareTable() {
  const results = document.getElementById('compareResults');
  const budget = parseFloat(document.getElementById('compareBudget').value) || 0;
  const selected = products.filter(p => selectedForCompare.has(p.id));

  if (selected.length === 0) {
    results.innerHTML = '<div class="compare-results-empty">Select products above to compare</div>';
    return;
  }

  const maxCpm = Math.max(...selected.map(p => p.cpm));
  const minCpm = Math.min(...selected.map(p => p.cpm));
  const sortedSel = [...selected].sort((a, b) => a.cpm - b.cpm);
  const rows = sortedSel.map(p => {
    const barWidth = maxCpm > 0 ? (p.cpm / maxCpm * 100).toFixed(1) : 0;
    const impsForBudget = budget > 0 ? Math.round((budget / p.cpm) * 1000) : null;
    const isBest = p.cpm === minCpm && selected.length > 1;
    const compareWarn = budget > 0 && p.minSpend > 0 && budget < p.minSpend
      ? `<span class="min-warn-badge" title="Minimum monthly spend is $${formatMoney(p.minSpend)}">&#9888; Below minimum</span>` : '';
    return `<tr${budget > 0 && p.minSpend > 0 && budget < p.minSpend ? ' class="row-warning"' : ''}>
      <td class="td-name">${escHtml(p.name)} ${isBest ? '<span style="color:var(--accent);font-size:11px;">&#9733; lowest CPM</span>' : ''} ${compareWarn}</td>
      <td>${(p.categories||[]).map(c => `<span class="product-category-badge">${escHtml(c)}</span>`).join(' ')}</td>
      <td class="td-cpm">$${formatCpm(p.cpm)}</td>
      <td class="td-bar"><div class="cpm-bar-bg"><div class="cpm-bar-fill" style="width:${barWidth}%"></div></div></td>
      ${budget > 0 ? `<td class="td-impressions has-budget">${formatNum(impsForBudget)}</td>` : `<td class="td-impressions">&mdash;</td>`}
      <td class="td-remove">
        <button class="product-btn pkg-add-btn" onclick="addToPackageFromProduct('${p.id}')" title="Add to Package">&#43; Add to Package</button>
        <button class="compare-remove-btn" onclick="removeFromCompare('${p.id}')" title="Remove">&#215;</button>
      </td>
    </tr>`;
  }).join('');

  results.innerHTML = `<div class="compare-table-wrap"><table>
    <thead><tr>
      <th>Product</th><th>Category</th><th>CPM</th><th>Relative Cost</th>
      <th>${budget > 0 ? 'Impressions ($' + formatMoney(budget) + ' budget)' : 'Impressions'}</th>
      <th></th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

// ── PACKAGE BUILDER ───────────────────────────────────────────────────
// packageItems: array of { productId, budget }
let packageItems = [];
// activeAddons: Set of addon product IDs currently toggled on
let activeAddons = new Set();

function renderPackagePicker() {
  const search = document.getElementById('pkgSearch').value.toLowerCase();
  const cat = document.getElementById('pkgFilterCategory').value;

  // Update category dropdown
  const catSel = document.getElementById('pkgFilterCategory');
  const cur = catSel.value;
  const cats = getCategories();
  catSel.innerHTML = '<option value="">All Categories</option>' +
    cats.map(c => `<option value="${c}" ${c === cur ? 'selected' : ''}>${c}</option>`).join('');

  let filtered = products.filter(p => {
    if (p.type === 'addon') return false;
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search) ||
      (p.categories || []).some(c => c.toLowerCase().includes(search));
    const matchCat = !cat || (p.categories||[]).includes(cat);
    return matchSearch && matchCat;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const inPackage = new Set(packageItems.map(i => i.productId));

  document.getElementById('pkgProductList').innerHTML = filtered.map(p => `
    <div class="pkg-pick-item ${inPackage.has(p.id) ? 'in-package' : ''}" onclick="togglePackageProduct('${p.id}')">
      <div class="pkg-pick-info">
        <div class="pkg-pick-name">${escHtml(p.name)}</div>
        ${p.vendor ? `<span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 6px;margin-bottom:2px;display:inline-block;">${escHtml(p.vendor)}</span>` : ''}
        <div class="pkg-pick-meta">${(p.categories||[]).length ? escHtml(p.categories.join(', ')) + ' &bull; ' : ''}$${formatCpm(p.cpm)} CPM</div>
      </div>
      <div class="pkg-pick-action">
        ${inPackage.has(p.id)
          ? '<span class="pkg-added-badge">&#10003; Added</span>'
          : '<span class="pkg-add-icon">&#43;</span>'}
      </div>
    </div>
  `).join('') || '<div style="color:var(--text-muted);padding:12px;font-size:13px;">No products match.</div>';

  renderPackageWorkspace();
}

function togglePackageProduct(id) {
  const idx = packageItems.findIndex(i => i.productId === id);
  if (idx !== -1) {
    packageItems.splice(idx, 1);
  } else {
    packageItems.push({ productId: id, budget: 0 });
  }
  renderPackagePicker();
}

function addToPackageFromProduct(id) {
  if (!packageItems.find(i => i.productId === id)) {
    packageItems.push({ productId: id, budget: 0 });
    toast('Added to package');
  }
  switchTab('package');
  renderPackagePicker();
}

function getAddonCpmFor(p) {
  // Returns total addon CPM increase applicable to this product
  let addonCpm = 0;
  activeAddons.forEach(addonId => {
    const addon = products.find(x => x.id === addonId);
    if (!addon) return;
    const appliesToVendor = addon.addonFor === p.vendor;
    const appliesToCategory = (p.categories||[]).includes(addon.addonFor);
    if (appliesToVendor || appliesToCategory) addonCpm += addon.cpm;
  });
  return addonCpm;
}

function renderAddonsPanel() {
  const panel = document.getElementById('pkgAddonsPanel');
  const list = document.getElementById('pkgAddonsList');
  const sub = document.getElementById('pkgAddonsSub');

  // Find which addon groups are relevant given current package
  const vendorsInPackage = new Set(packageItems.map(i => products.find(x => x.id === i.productId)?.vendor).filter(Boolean));
  const catsInPackage = new Set(packageItems.flatMap(i => products.find(x => x.id === i.productId)?.categories || []));

  const relevantAddons = products.filter(p =>
    p.type === 'addon' &&
    (vendorsInPackage.has(p.addonFor) || catsInPackage.has(p.addonFor))
  );

  if (relevantAddons.length === 0) {
    panel.style.display = 'none';
    return;
  }

  panel.style.display = 'block';

  // Group by addonFor
  const groups = {};
  relevantAddons.forEach(a => {
    if (!groups[a.addonFor]) groups[a.addonFor] = [];
    groups[a.addonFor].push(a);
  });

  sub.textContent = 'Select add-ons to apply to qualifying products in your package';

  list.innerHTML = Object.entries(groups).map(([groupName, addons]) => `
    <div class="pkg-addon-group">
      <div class="pkg-addon-group-label">${escHtml(groupName)} Products</div>
      ${addons.map(a => {
        const isActive = activeAddons.has(a.id);
        const minWarn = isActive && a.addonMinSpend
          ? `<div class="pkg-addon-min-warn">&#9888; This add-on requires a <strong>$${formatMoney(a.addonMinSpend)}/month minimum</strong> — overrides base product minimums</div>`
          : '';
        return `
        <label class="pkg-addon-item ${isActive ? 'active' : ''}">
          <input type="checkbox" ${isActive ? 'checked' : ''}
            onchange="toggleAddon('${a.id}', this.checked)" />
          <span class="pkg-addon-name">${escHtml(a.name)}</span>
          <span class="pkg-addon-cpm">+$${formatCpm(a.cpm)} CPM</span>
          <span class="pkg-addon-note">${escHtml(a.notes || '')}</span>
        </label>${minWarn}`;
      }).join('')}
    </div>
  `).join('');
}

function toggleAddon(id, checked) {
  if (checked) activeAddons.add(id);
  else activeAddons.delete(id);
  renderPackageWorkspace();
}

function renderPackageWorkspace() {
  renderAddonsPanel();
  const container = document.getElementById('pkgLineItems');

  if (packageItems.length === 0) {
    container.innerHTML = `<div class="pkg-empty"><img src="images/package-builder.jpg" alt="Select products to build your package" class="pkg-empty-img" /><div class="pkg-empty-msg">Select products from the left to build your package</div></div>`;
    document.getElementById('pkgSummary').style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="pkg-line-header">
      <span>Product</span>
      <span>CPM</span>
      <span>Budget Allocation</span>
      <span>Impressions</span>
      <span></span>
    </div>
    ${packageItems.map((item, idx) => {
      const p = products.find(x => x.id === item.productId);
      if (!p) return '';
      const addonCpm = getAddonCpmFor(p);
      const effectiveCpm = p.cpm + addonCpm;
      const imps = item.budget > 0 ? Math.round((item.budget / effectiveCpm) * 1000) : 0;
      const cpmDisplay = addonCpm > 0
        ? `$${formatCpm(p.cpm)} <span class="pkg-addon-delta">+$${formatCpm(addonCpm)}</span>`
        : `$${formatCpm(p.cpm)}`;
      const pkgWarn = item.budget > 0 && p.minSpend > 0 && item.budget < p.minSpend
        ? `<div class="pkg-line-warning">&#9888; Min spend $${formatMoney(p.minSpend)}/mo &mdash; currently $${formatMoney(item.budget)}</div>` : '';
      return `<div class="pkg-line-item${item.budget > 0 && p.minSpend > 0 && item.budget < p.minSpend ? ' pkg-line-warning-row' : ''}">
        <div class="pkg-line-name">
          <div class="pkg-line-product-name">${escHtml(p.name)}</div>
          ${p.vendor ? `<span class="product-vendor-badge ${vendorClass(p.vendor)}" style="font-size:9px;padding:2px 6px;margin:2px 0;display:inline-block;">${escHtml(p.vendor)}</span>` : ''}
          <div class="pkg-line-product-cat">${escHtml((p.categories||[]).join(', '))}</div>
          ${pkgWarn}
        </div>
        <div class="pkg-line-cpm">${cpmDisplay}</div>
        <div class="pkg-line-budget">
          <div class="input-row">
            <span class="input-prefix">$</span>
            <input type="number" class="pkg-budget-field" value="${item.budget || ''}" placeholder="0.00"
              step="100" min="0" data-idx="${idx}" oninput="updateItemBudget(${idx}, this.value)" />
          </div>
        </div>
        <div class="pkg-line-impressions ${imps > 0 ? 'has-value' : ''}">
          ${imps > 0 ? formatNum(imps) + '<span class="pkg-line-imps-label"> impressions</span>' : '&mdash;'}
        </div>
        <div class="pkg-line-remove">
          <button class="pkg-remove-btn" onclick="removePackageItem(${idx})">&#215;</button>
        </div>
      </div>`;
    }).join('')}
  `;

  updatePackageSummary();
}

function updateItemBudget(idx, val) {
  packageItems[idx].budget = parseFloat(val) || 0;
  updatePackageSummary();
  updateLineWarning(idx);
}

function updateLineWarning(idx) {
  const item = packageItems[idx];
  const p = products.find(x => x.id === item.productId);
  if (!p) return;

  const lineEl = document.querySelectorAll('.pkg-line-item')[idx];
  if (!lineEl) return;

  const isWarning = item.budget > 0 && p.minSpend > 0 && item.budget < p.minSpend;

  // Toggle warning row class
  lineEl.classList.toggle('pkg-line-warning-row', isWarning);

  // Update or remove the warning message
  let warnEl = lineEl.querySelector('.pkg-line-warning');
  if (isWarning) {
    const msg = `&#9888; Min spend $${formatMoney(p.minSpend)}/mo &mdash; currently $${formatMoney(item.budget)}`;
    if (warnEl) {
      warnEl.innerHTML = msg;
    } else {
      warnEl = document.createElement('div');
      warnEl.className = 'pkg-line-warning';
      warnEl.innerHTML = msg;
      lineEl.querySelector('.pkg-line-name').appendChild(warnEl);
    }
  } else if (warnEl) {
    warnEl.remove();
  }

  // Also update impressions cell live
  const addonCpm = getAddonCpmFor(p);
  const effectiveCpm = p.cpm + addonCpm;
  const imps = item.budget > 0 ? Math.round((item.budget / effectiveCpm) * 1000) : 0;
  const impsEl = lineEl.querySelector('.pkg-line-impressions');
  if (impsEl) {
    impsEl.className = 'pkg-line-impressions' + (imps > 0 ? ' has-value' : '');
    impsEl.innerHTML = imps > 0 ? formatNum(imps) + '<span class="pkg-line-imps-label"> impressions</span>' : '—';
  }
}

function removePackageItem(idx) {
  packageItems.splice(idx, 1);
  renderPackagePicker();
}

function updatePackageSummary() {
  const summary = document.getElementById('pkgSummary');

  if (packageItems.length === 0) {
    summary.style.display = 'none';
    return;
  }

  summary.style.display = 'block';

  let totalBudget = 0;
  let totalImpressions = 0;

  packageItems.forEach(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return;
    const budget = item.budget || 0;
    totalBudget += budget;
    const effectiveCpm = p.cpm + getAddonCpmFor(p);
    if (budget > 0) totalImpressions += Math.round((budget / effectiveCpm) * 1000);
  });

  const blendedCpm = totalImpressions > 0 ? (totalBudget / totalImpressions) * 1000 : 0;

  document.getElementById('pkgTotalBudget').textContent = '$' + formatMoney(totalBudget);
  document.getElementById('pkgTotalImpressions').textContent = totalImpressions > 0 ? formatNum(totalImpressions) : '0';
  document.getElementById('pkgBlendedCpm').textContent = blendedCpm > 0 ? '$' + formatCpm(blendedCpm) : '$0.00';
  document.getElementById('pkgProductCount').textContent = packageItems.length;
}

function distributeEvenly() {
  const total = parseFloat(document.getElementById('pkgBudget').value) || 0;
  if (total <= 0) { toast('Enter a total budget first', 'error'); return; }
  if (packageItems.length === 0) { toast('Add products to your package first', 'error'); return; }
  const share = Math.round((total / packageItems.length) * 100) / 100;
  packageItems.forEach(item => item.budget = share);
  renderPackageWorkspace();
  // Re-render picker to keep state in sync
  renderPackagePicker();
  toast('Budget distributed evenly');
  // On mobile, scroll summary into view after render
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      const summary = document.getElementById('pkgSummary');
      if (summary) summary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

document.getElementById('pkgDistribute').addEventListener('click', distributeEvenly);
document.getElementById('pkgBudget').addEventListener('keydown', e => { if (e.key === 'Enter') distributeEvenly(); });

document.getElementById('pkgClearAll').addEventListener('click', () => {
  if (packageItems.length === 0) return;
  packageItems = [];
  activeAddons = new Set();
  document.getElementById('pkgBudget').value = '';
  renderPackagePicker();
  toast('Package cleared');
});

document.getElementById('pkgSearch').addEventListener('input', renderPackagePicker);
document.getElementById('pkgFilterCategory').addEventListener('change', renderPackagePicker);

// ── HELPERS ───────────────────────────────────────────────────────────
function formatCpm(v) { return Number(v).toFixed(2); }

function formatMoney(v) {
  return v >= 1000
    ? v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : v.toFixed(2);
}

function formatNum(v) {
  if (v === null || v === undefined) return '&mdash;';
  if (v >= 1000000) return (v / 1000000).toFixed(2) + 'M';
  if (v >= 1000) return v.toLocaleString('en-US');
  return String(v);
}

function categoryClass(c) {
  const map = {
    'Fox59':            'cat--fox59',
    'Audience Network': 'cat--audience-network',
  };
  return map[c] || '';
}

function vendorClass(v) {
  const map = {
    'Platform X':  'vendor--platform-x',
    'IQx ShopIQ':  'vendor--iqx-shopiq',
    'V Digital':   'vendor--v-digital',
    'Weather Co.': 'vendor--weather-co',
    'Nexstar':     'vendor--nexstar',
    'Core':        'vendor--core',
  };
  return map[v] || '';
}

function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let toastTimer;
function toast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}



// ── INIT ──────────────────────────────────────────────────────────────
loadProducts();
renderProducts();
setSolveFor('cpm');
renderMobileProductList();
renderMobilePkgList();

// Mobile guard: redirect hidden tabs (Products/Compare) to Calculator
if (window.innerWidth <= 768) {
  const activeBtn = document.querySelector('.nav-btn.active');
  const activeTab = activeBtn ? activeBtn.getAttribute('data-tab') : '';
  if (activeTab === 'products' || activeTab === 'compare') {
    switchTab('calculator');
  }
}

// ── CAMPAIGN IMPACT ───────────────────────────────────────────────────

// Gauge arc setup — semicircle from 180° to 0° (left to right)
const GAUGE_CX = 150, GAUGE_CY = 140, GAUGE_R = 90;
const GAUGE_SEGMENTS = [
  { id: 'gauge-seg-1', color: '#94a3b8', startDeg: 180, endDeg: 216 }, // Low
  { id: 'gauge-seg-2', color: '#f59e0b', startDeg: 216, endDeg: 252 }, // Light
  { id: 'gauge-seg-3', color: '#10b981', startDeg: 252, endDeg: 288 }, // Moderate
  { id: 'gauge-seg-4', color: '#1a5cff', startDeg: 288, endDeg: 324 }, // Strong
  { id: 'gauge-seg-5', color: '#7c3aed', startDeg: 324, endDeg: 360 }, // At Capacity
];

function degToRad(d) { return d * Math.PI / 180; }

function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = degToRad(startDeg), e = degToRad(endDeg);
  const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
  const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

function initGauge() {
  GAUGE_SEGMENTS.forEach(seg => {
    const el = document.getElementById(seg.id);
    if (!el) return;
    el.setAttribute('d', arcPath(GAUGE_CX, GAUGE_CY, GAUGE_R, seg.startDeg, seg.endDeg));
    el.setAttribute('stroke', seg.color);
    el.setAttribute('opacity', '0.25');
  });
}

function setGaugeNeedle(pct) {
  // pct 0-1 maps from 180° to 360°
  const deg = 180 + pct * 180;
  const rad = degToRad(deg);
  const len = 75;
  const x2 = GAUGE_CX + len * Math.cos(rad);
  const y2 = GAUGE_CY + len * Math.sin(rad);
  const needle = document.getElementById('gauge-needle');
  if (needle) {
    needle.setAttribute('x2', x2.toFixed(1));
    needle.setAttribute('y2', y2.toFixed(1));
  }

  // Highlight active segment, dim others
  GAUGE_SEGMENTS.forEach((seg, i) => {
    const el = document.getElementById(seg.id);
    if (!el) return;
    const segPct = i / GAUGE_SEGMENTS.length;
    const active = pct >= segPct && pct < (i + 1) / GAUGE_SEGMENTS.length || (i === GAUGE_SEGMENTS.length - 1 && pct >= (i / GAUGE_SEGMENTS.length));
    el.setAttribute('opacity', active ? '1' : '0.2');
  });
}

// Reach model using Sainsbury/Metheringham formula (industry standard)
// reach% = 1 - (1 - 1/audience)^impressions  — simplified
// More practical: reach = audience * (1 - e^(-impressions/audience))
function estimateReach(audience, impressions) {
  if (audience <= 0 || impressions <= 0) return 0;
  return Math.round(audience * (1 - Math.exp(-impressions / audience)));
}

function freqStatus(freq) {
  if (freq < 1)  return { text: 'Too low — negligible impact', color: '#94a3b8' };
  if (freq < 3)  return { text: 'Under-impact — increase impressions', color: '#f59e0b' };
  if (freq <= 7) return { text: 'Optimal frequency range ✓', color: '#10b981' };
  if (freq <= 12) return { text: 'High — monitor for fatigue', color: '#f59e0b' };
  return { text: 'Overexposure — risk of ad fatigue', color: '#e03e3e' };
}

function gaugeLevel(reachPct, freq) {
  // Frequency is the primary driver — it maps directly to campaign impact zones.
  // Reach refines the position within a zone but cannot elevate to the next zone alone.
  // Round to 1 decimal so display value (3.0x) matches gate logic exactly.
  freq = Math.round(freq * 10) / 10;

  // Hard label caps by frequency — gauge and frequency card always tell the same story:
  //   freq < 1  → max Low
  //   freq 1–3  → max Light
  //   freq 3–5  → max Moderate  (entering optimal range, not yet strong)
  //   freq 5–7  → max Strong
  //   freq 7–12 → max Strong    (still effective, slight fatigue risk)
  //   freq > 12 → max Moderate  (overexposure caps impact)
  let maxLabel;
  if (freq < 1)          maxLabel = 0;     // Low
  else if (freq < 3)     maxLabel = 1;     // Light
  else if (freq < 5)     maxLabel = 2;     // Moderate (3–5 entering optimal)
  else if (freq <= 12)   maxLabel = 3;     // Strong (5–12 optimal/near-optimal)
  else                   maxLabel = 2;     // Moderate (overexposure caps at Moderate)

  // Reach score shifts needle within the zone (0–1, saturates at 60% reach)
  const reachScore = Math.min(reachPct / 0.60, 1.0);

  // Frequency quality score within its allowed zone
  let freqQuality;
  if (freq < 1)        freqQuality = freq;
  else if (freq < 3)   freqQuality = 0.3 + (freq - 1) / 2 * 0.7;   // 0.3→1.0 across 1–3
  else if (freq < 5)   freqQuality = 0.25 + ((freq - 3) / 2) * 0.75; // 0.25→1 across 3–5
  else if (freq <= 7)  freqQuality = 0.5 + (freq - 5) / 2 * 0.5;   // 0.5→1.0 across 5–7
  else if (freq <= 12) freqQuality = 1.0 - (freq - 7) / 5 * 0.5;   // 1.0→0.5 across 7–12
  else                 freqQuality = Math.max(0.1, 0.5 - (freq - 12) * 0.04);

  // Position within zone: freq quality weighted 70%, reach 30%
  const zonePosition = freqQuality * 0.70 + reachScore * 0.30;

  // Zone boundaries on the 0–1 needle scale
  const zoneBounds = [
    [0.00, 0.20],  // Low
    [0.20, 0.40],  // Light
    [0.40, 0.60],  // Moderate
    [0.60, 0.82],  // Strong
    [0.82, 0.99],  // At Capacity
  ];
  const zoneLabels = ['Low', 'Light', 'Moderate', 'Strong', 'At Capacity'];
  const zoneNotes = [
    'Campaign will have minimal awareness impact. Frequency is too low — increase impressions so each person sees the ad more often.',
    'Some exposure but frequency is below the effective threshold. Increase impressions to reach each person more often.',
    'Good reach with frequency entering the optimal range. A solid awareness campaign — increase frequency toward 5–7x for stronger impact.',
    'High reach with strong optimal frequency. Expect solid brand recall and message retention.',
    'Peak impact — maximum reach at optimal frequency. Additional impressions risk diminishing returns or audience fatigue.',
  ];

  const zone = Math.min(maxLabel, 4);
  const [zMin, zMax] = zoneBounds[zone];
  const pct = zMin + zonePosition * (zMax - zMin);

  return { label: zoneLabels[zone], note: zoneNotes[zone], pct };
}

function calcImpact() {
  const audience    = parseFloat(document.getElementById('ci-audience').value) || 0;
  const impressions = parseFloat(document.getElementById('ci-impressions').value) || 0;

  if (!audience || !impressions) {
    // Reset all outputs to blank state
    document.getElementById('ci-reach').textContent      = '—';
    document.getElementById('ci-reach-pct').textContent  = 'Enter values to calculate';
    document.getElementById('ci-freq').textContent       = '—';
    document.getElementById('ci-freq-status').innerHTML  = '';
    document.getElementById('ci-eff-reach').textContent  = '—';
    document.getElementById('ci-imps-needed').textContent = '—';
    document.getElementById('ci-imps-needed-sub').textContent = '';
    // Reset gauge to neutral
    setGaugeNeedle(0);
    GAUGE_SEGMENTS.forEach(seg => {
      const el = document.getElementById(seg.id);
      if (el) el.setAttribute('opacity', '0.2');
    });
    document.getElementById('gauge-reading').textContent = '—';
    document.getElementById('gauge-reading').style.color = 'var(--text-muted)';
    document.getElementById('gauge-note').textContent    = 'Enter your campaign details to see market impact';
    return;
  }

  const reach    = estimateReach(audience, impressions);
  const reachPct = reach / audience;
  const freq     = reach > 0 ? impressions / reach : 0; // total campaign frequency

  // Effective reach: Poisson — people who saw it 3+ times
  const lambda = freq;
  const pLessThan3 = Math.exp(-lambda) * (1 + lambda + lambda * lambda / 2);
  const effReach = Math.round(reach * (1 - pLessThan3));

  // Impressions needed for 5x frequency (standard awareness benchmark)
  const impsNeeded = Math.round(reach * 5);
  const diff = impsNeeded - impressions;
  const neededSub = diff > 0
    ? `+${formatNum(diff)} more to hit 5x freq`
    : `${formatNum(Math.abs(diff))} surplus at 5x freq`;

  const fStatus = freqStatus(freq);
  const gauge   = gaugeLevel(reachPct, freq);

  document.getElementById('ci-reach').textContent      = formatNum(reach);
  document.getElementById('ci-reach-pct').textContent  = (reachPct * 100).toFixed(1) + '% of audience';

  document.getElementById('ci-freq').textContent = freq.toFixed(1) + 'x';
  document.getElementById('ci-freq-status').innerHTML = `<span style="color:${fStatus.color};font-weight:600;">${fStatus.text}</span>`;

  document.getElementById('ci-eff-reach').textContent   = formatNum(effReach);
  document.getElementById('ci-imps-needed').textContent = formatNum(impsNeeded);
  document.getElementById('ci-imps-needed-sub').textContent = neededSub;

  // Gauge
  setGaugeNeedle(gauge.pct);
  document.getElementById('gauge-reading').textContent = gauge.label;
  document.getElementById('gauge-reading').style.color = GAUGE_SEGMENTS[
    gauge.label === 'Low' ? 0 : gauge.label === 'Light' ? 1 : gauge.label === 'Moderate' ? 2 : gauge.label === 'Strong' ? 3 : 4
  ].color;
  document.getElementById('gauge-note').textContent = gauge.note;

}

function ciImpressionsInput() {
  // On mobile, suppress live calculation — wait for Calculate button tap
  if (window.innerWidth <= 768) return;
  calcImpact();
}

function ciMobileCalculate() {
  calcImpact();
  setTimeout(() => {
    const resultsEl = document.getElementById('ci-pre-results');
    if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ── TACTIC FIELD DEFINITIONS ─────────────────────────────────────────
const TACTIC_CONFIG = {
  audio: {
    label: 'Audio',
    fields: [
      { id: 'ci-post-completions',       label: 'Completed Listens',   prefix: '#',  step: 1000,  placeholder: 'e.g. 45000' },
      { id: 'ci-post-completion-rate',   label: 'Completion Rate',     suffix: '%',  step: 1,     placeholder: 'e.g. 85' },
    ],
    metrics: [
      { id: 'ci-post-completion-rate-r', label: 'Completion Rate',     sub: 'Completed ÷ impressions' },
      { id: 'ci-post-cost-per-complete', label: 'Cost Per Completion', sub: 'Spend ÷ completed listens' },
    ]
  },
  ctv: {
    label: 'CTV',
    fields: [
      { id: 'ci-post-completions',       label: 'Completed Views',     prefix: '#',  step: 1000,  placeholder: 'e.g. 45000' },
      { id: 'ci-post-completion-rate',   label: 'Completion Rate',     suffix: '%',  step: 1,     placeholder: 'e.g. 90' },
    ],
    metrics: [
      { id: 'ci-post-completion-rate-r', label: 'Completion Rate',     sub: 'Completed ÷ impressions' },
      { id: 'ci-post-cost-per-complete', label: 'Cost Per Completion', sub: 'Spend ÷ completed views' },
    ]
  },
  dooh: {
    label: 'Digital Out of Home',
    fields: [],
    metrics: []
  },
  display: {
    label: 'Display',
    fields: [
      { id: 'ci-post-clicks',       label: 'Clicks',          prefix: '#', step: 100,  placeholder: 'e.g. 1200' },
      { id: 'ci-post-visits',       label: 'Site Visits',     prefix: '#', step: 100,  placeholder: 'e.g. 800' },
      { id: 'ci-post-engagements',  label: 'Engagements',     prefix: '#', step: 100,  placeholder: 'e.g. 500' },
    ],
    metrics: [
      { id: 'ci-post-ctr',          label: 'CTR',             sub: 'Clicks ÷ impressions' },
      { id: 'ci-post-cpc',          label: 'Cost Per Click',  sub: 'Spend ÷ clicks' },
      { id: 'ci-post-engagement-r', label: 'Engagement Rate', sub: 'Engagements ÷ impressions' },
    ]
  },
  preroll: {
    label: 'Preroll',
    fields: [
      { id: 'ci-post-clicks',            label: 'Clicks',              prefix: '#', step: 100,  placeholder: 'e.g. 800' },
      { id: 'ci-post-completions',       label: 'Completed Views',     prefix: '#', step: 1000, placeholder: 'e.g. 40000' },
      { id: 'ci-post-completion-rate',   label: 'Completion Rate',     suffix: '%', step: 1,    placeholder: 'e.g. 72' },
    ],
    metrics: [
      { id: 'ci-post-ctr',               label: 'CTR',                 sub: 'Clicks ÷ impressions' },
      { id: 'ci-post-cpc',               label: 'Cost Per Click',      sub: 'Spend ÷ clicks' },
      { id: 'ci-post-completion-rate-r', label: 'Completion Rate',     sub: 'Completed ÷ impressions' },
      { id: 'ci-post-cost-per-complete', label: 'Cost Per Completion', sub: 'Spend ÷ completed views' },
    ]
  },
  sem: {
    label: 'SEM',
    fields: [
      { id: 'ci-post-clicks',       label: 'Clicks',          prefix: '#', step: 100,  placeholder: 'e.g. 3000' },
      { id: 'ci-post-conversions',  label: 'Conversions',     prefix: '#', step: 10,   placeholder: 'e.g. 150' },
    ],
    metrics: [
      { id: 'ci-post-ctr',          label: 'CTR',                    sub: 'Clicks ÷ impressions' },
      { id: 'ci-post-cpc',          label: 'Cost Per Click',         sub: 'Spend ÷ clicks' },
      { id: 'ci-post-conv-rate',    label: 'Conversion Rate',        sub: 'Conversions ÷ clicks' },
      { id: 'ci-post-cpa',          label: 'Cost Per Acquisition',   sub: 'Spend ÷ conversions' },
    ]
  },
  social: {
    label: 'Social',
    fields: [
      { id: 'ci-post-clicks',       label: 'Clicks',          prefix: '#', step: 100,  placeholder: 'e.g. 2500' },
      { id: 'ci-post-engagements',  label: 'Engagements',     prefix: '#', step: 100,  placeholder: 'e.g. 4000' },
      { id: 'ci-post-visits',       label: 'Site Visits',     prefix: '#', step: 100,  placeholder: 'e.g. 1200' },
    ],
    metrics: [
      { id: 'ci-post-ctr',          label: 'CTR',             sub: 'Clicks ÷ impressions' },
      { id: 'ci-post-cpc',          label: 'Cost Per Click',  sub: 'Spend ÷ clicks' },
      { id: 'ci-post-engagement-r', label: 'Engagement Rate', sub: 'Engagements ÷ impressions' },
      { id: 'ci-post-cpe',          label: 'Cost Per Engagement', sub: 'Spend ÷ engagements' },
    ]
  }
};

function onTacticChange() {
  const tactic = document.getElementById('ci-post-tactic').value;
  const fieldsEl = document.getElementById('ci-post-tactic-fields');
  const metricsEl = document.getElementById('ci-post-tactic-metrics');

  if (!tactic || !TACTIC_CONFIG[tactic]) {
    fieldsEl.innerHTML = '';
    metricsEl.innerHTML = '';
    metricsEl.style.display = 'none';
    return;
  }

  const config = TACTIC_CONFIG[tactic];

  // Render tactic-specific input fields
  fieldsEl.innerHTML = config.fields.map(f => `
    <div class="impact-field" style="margin-top:12px;">
      <label>${f.label}</label>
      <div class="input-row">
        <span class="input-prefix">${f.prefix || '#'}</span>
        <input type="number" id="${f.id}" placeholder="${f.placeholder}" step="${f.step}" min="0" oninput="calcPostImpact()" />
        ${f.suffix ? `<span class="input-suffix">${f.suffix}</span>` : ''}
      </div>
    </div>
  `).join('');

  // Render tactic-specific metric card placeholders
  if (config.metrics.length > 0) {
    metricsEl.innerHTML = config.metrics.map(m => `
      <div class="impact-result-item">
        <div class="impact-result-label">${m.label}</div>
        <div class="impact-result-value" id="${m.id}">—</div>
        <div class="impact-result-sub">${m.sub}</div>
      </div>
    `).join('');
    metricsEl.style.display = 'grid';
  } else {
    metricsEl.innerHTML = '';
    metricsEl.style.display = 'none';
  }

  calcPostImpact();
}

function getPostVal(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  return parseFloat(el.value) || 0;
}

function setMetric(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = val;
}

function calcPostImpact() {
  const audience    = parseFloat(document.getElementById('ci-post-audience').value) || 0;
  const impressions = parseFloat(document.getElementById('ci-post-impressions').value) || 0;
  const spend       = parseFloat(document.getElementById('ci-post-spend').value) || 0;
  const tactic      = document.getElementById('ci-post-tactic').value;

  if (!audience || !impressions) {
    ['ci-post-reach','ci-post-freq','ci-post-eff-reach','ci-post-ecpm','ci-post-cpur','ci-post-cpp'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '—';
    });
    const rp = document.getElementById('ci-post-reach-pct');
    if (rp) rp.textContent = 'Enter values to calculate';
    const fs = document.getElementById('ci-post-freq-status');
    if (fs) fs.innerHTML = '';
    const ins = document.getElementById('ci-post-insight');
    if (ins) ins.style.display = 'none';
    return;
  }

  // ── Core metrics ──
  const reach    = estimateReach(audience, impressions);
  const reachPct = reach / audience;
  const freq     = reach > 0 ? impressions / reach : 0;
  const lambda   = freq;
  const pLt3     = Math.exp(-lambda) * (1 + lambda + lambda * lambda / 2);
  const effReach = Math.round(reach * (1 - pLt3));
  const ecpm     = spend > 0 && impressions > 0 ? (spend / impressions) * 1000 : 0;
  const cpur     = spend > 0 && reach > 0 ? spend / reach : 0;
  const cpp      = spend > 0 && reachPct > 0 ? spend / (reachPct * 100) : 0;
  const fStatus  = freqStatus(freq);

  document.getElementById('ci-post-reach').textContent     = formatNum(reach);
  document.getElementById('ci-post-reach-pct').textContent = (reachPct * 100).toFixed(1) + '% of audience';
  document.getElementById('ci-post-freq').textContent      = freq.toFixed(1) + 'x';
  document.getElementById('ci-post-freq-status').innerHTML = `<span style="color:${fStatus.color};font-weight:600;">${fStatus.text}</span>`;
  document.getElementById('ci-post-eff-reach').textContent = formatNum(effReach);
  document.getElementById('ci-post-ecpm').textContent      = ecpm > 0 ? '$' + formatCpm(ecpm) : '—';
  document.getElementById('ci-post-cpur').textContent      = cpur > 0 ? '$' + cpur.toFixed(2) : '—';
  document.getElementById('ci-post-cpp').textContent       = cpp > 0 ? '$' + formatMoney(cpp) : '—';

  // ── Tactic-specific metrics ──
  if (tactic && TACTIC_CONFIG[tactic]) {
    const clicks       = getPostVal('ci-post-clicks');
    const visits       = getPostVal('ci-post-visits');
    const engagements  = getPostVal('ci-post-engagements');
    const completions  = getPostVal('ci-post-completions');
    const conversions  = getPostVal('ci-post-conversions');

    const ctr    = clicks > 0 && impressions > 0 ? (clicks / impressions * 100) : 0;
    const cpc    = spend > 0 && clicks > 0 ? spend / clicks : 0;
    const engR   = engagements > 0 && impressions > 0 ? (engagements / impressions * 100) : 0;
    const cpe    = spend > 0 && engagements > 0 ? spend / engagements : 0;
    const compR  = completions > 0 && impressions > 0 ? (completions / impressions * 100) : 0;
    const costPC = spend > 0 && completions > 0 ? spend / completions : 0;
    const convR  = conversions > 0 && clicks > 0 ? (conversions / clicks * 100) : 0;
    const cpa    = spend > 0 && conversions > 0 ? spend / conversions : 0;

    setMetric('ci-post-ctr',              ctr  > 0 ? ctr.toFixed(2)  + '%' : '—');
    setMetric('ci-post-cpc',              cpc  > 0 ? '$' + cpc.toFixed(2) : '—');
    setMetric('ci-post-engagement-r',     engR > 0 ? engR.toFixed(2) + '%' : '—');
    setMetric('ci-post-cpe',              cpe  > 0 ? '$' + cpe.toFixed(2) : '—');
    setMetric('ci-post-completion-rate-r',compR> 0 ? compR.toFixed(1) + '%' : '—');
    setMetric('ci-post-cost-per-complete',costPC>0 ? '$' + costPC.toFixed(2) : '—');
    setMetric('ci-post-conv-rate',        convR> 0 ? convR.toFixed(2) + '%' : '—');
    setMetric('ci-post-cpa',              cpa  > 0 ? '$' + formatMoney(cpa) : '—');
  }

  // ── Insight ──
  const insight = document.getElementById('ci-post-insight');
  let msg = '';
  if (reachPct >= 0.5 && freq >= 3 && freq <= 7)
    msg = '&#10003; Strong campaign — you reached over half your audience at an optimal frequency.';
  else if (freq < 3)
    msg = '&#9888; Frequency was below the effective threshold. Consider consolidating budget to fewer, higher-frequency placements.';
  else if (freq > 7)
    msg = '&#9888; High frequency detected. Some budget could be reallocated to expand reach rather than re-exposing the same audience.';
  else if (reachPct < 0.2)
    msg = '&#9432; Reach was limited relative to your audience size. A broader targeting strategy or higher impression volume could improve coverage.';
  else
    msg = '&#128200; Solid campaign delivery. Review frequency and reach benchmarks above for optimization opportunities.';
  insight.innerHTML = msg;
  insight.style.display = msg ? 'flex' : 'none';
}

// Wire up tab init
const _origSwitchTab = switchTab;
// Re-initialize gauge when tab opens
document.querySelector('[data-tab="impact"]').addEventListener('click', () => {
  setTimeout(initGauge, 50);
});
document.querySelector('[data-tab="package"]').addEventListener('click', () => {
  renderMobilePkgList();
});

// ── INDIANA COUNTY POPULATION DATA ───────────────────────────────────
// Source: U.S. Census Bureau 2024 Population Estimates (July 1, 2024)
// Published by STATS Indiana, updated March 13, 2025
// State total: 6,924,275 — sum of all 92 counties verified
const IN_COUNTIES = [
  { name: 'Adams',        pop: 36584  },
  { name: 'Allen',        pop: 399295 },
  { name: 'Bartholomew',  pop: 84741  },
  { name: 'Benton',       pop: 8853   },
  { name: 'Blackford',    pop: 11816  },
  { name: 'Boone',        pop: 78773  },
  { name: 'Brown',        pop: 15650  },
  { name: 'Carroll',      pop: 20747  },
  { name: 'Cass',         pop: 37559  },
  { name: 'Clark',        pop: 127479 },
  { name: 'Clay',         pop: 26424  },
  { name: 'Clinton',      pop: 32895  },
  { name: 'Crawford',     pop: 10523  },
  { name: 'Daviess',      pop: 34097  },
  { name: 'Dearborn',     pop: 51435  },
  { name: 'Decatur',      pop: 26421  },
  { name: 'DeKalb',       pop: 44330  },
  { name: 'Delaware',     pop: 112951 },
  { name: 'Dubois',       pop: 43629  },
  { name: 'Elkhart',      pop: 207436 },
  { name: 'Fayette',      pop: 23335  },
  { name: 'Floyd',        pop: 81931  },
  { name: 'Fountain',     pop: 16833  },
  { name: 'Franklin',     pop: 23136  },
  { name: 'Fulton',       pop: 20004  },
  { name: 'Gibson',       pop: 33038  },
  { name: 'Grant',        pop: 66458  },
  { name: 'Greene',       pop: 31219  },
  { name: 'Hamilton',     pop: 379704 },
  { name: 'Hancock',      pop: 88810  },
  { name: 'Harrison',     pop: 39978  },
  { name: 'Hendricks',    pop: 190629 },
  { name: 'Henry',        pop: 49081  },
  { name: 'Howard',       pop: 84082  },
  { name: 'Huntington',   pop: 36944  },
  { name: 'Jackson',      pop: 47420  },
  { name: 'Jasper',       pop: 33387  },
  { name: 'Jay',          pop: 20164  },
  { name: 'Jefferson',    pop: 32921  },
  { name: 'Jennings',     pop: 27634  },
  { name: 'Johnson',      pop: 170614 },
  { name: 'Knox',         pop: 35872  },
  { name: 'Kosciusko',    pop: 80669  },
  { name: 'LaGrange',     pop: 41122  },
  { name: 'Lake',         pop: 502955 },
  { name: 'LaPorte',      pop: 111348 },
  { name: 'Lawrence',     pop: 45192  },
  { name: 'Madison',      pop: 134222 },
  { name: 'Marion',       pop: 981628 },
  { name: 'Marshall',     pop: 46464  },
  { name: 'Martin',       pop: 9864   },
  { name: 'Miami',        pop: 35613  },
  { name: 'Monroe',       pop: 140702 },
  { name: 'Montgomery',   pop: 38633  },
  { name: 'Morgan',       pop: 73825  },
  { name: 'Newton',       pop: 14131  },
  { name: 'Noble',        pop: 47811  },
  { name: 'Ohio',         pop: 5996   },
  { name: 'Orange',       pop: 19824  },
  { name: 'Owen',         pop: 21851  },
  { name: 'Parke',        pop: 16508  },
  { name: 'Perry',        pop: 19320  },
  { name: 'Pike',         pop: 12116  },
  { name: 'Porter',       pop: 175860 },
  { name: 'Posey',        pop: 25067  },
  { name: 'Pulaski',      pop: 12421  },
  { name: 'Putnam',       pop: 37804  },
  { name: 'Randolph',     pop: 24337  },
  { name: 'Ripley',       pop: 29214  },
  { name: 'Rush',         pop: 16759  },
  { name: 'St. Joseph',   pop: 273744 },
  { name: 'Scott',        pop: 24751  },
  { name: 'Shelby',       pop: 45654  },
  { name: 'Spencer',      pop: 20192  },
  { name: 'Starke',       pop: 23463  },
  { name: 'Steuben',      pop: 34862  },
  { name: 'Sullivan',     pop: 20768  },
  { name: 'Switzerland',  pop: 9988   },
  { name: 'Tippecanoe',   pop: 191650 },
  { name: 'Tipton',       pop: 15324  },
  { name: 'Union',        pop: 6884   },
  { name: 'Vanderburgh',  pop: 180387 },
  { name: 'Vermillion',   pop: 15516  },
  { name: 'Vigo',         pop: 106166 },
  { name: 'Wabash',       pop: 30777  },
  { name: 'Warren',       pop: 8451   },
  { name: 'Warrick',      pop: 66339  },
  { name: 'Washington',   pop: 28345  },
  { name: 'Wayne',        pop: 66410  },
  { name: 'Wells',        pop: 28798  },
  { name: 'White',        pop: 24833  },
  { name: 'Whitley',      pop: 34885  },
];

const INDY_DMA_COUNTIES = [
  'Bartholomew','Blackford','Boone','Brown','Carroll','Cass','Clinton','Decatur','Delaware','Fayette','Fountain','Grant','Hamilton','Hancock','Hendricks','Henry','Howard','Johnson','Lawrence','Madison','Marion','Miami','Monroe','Montgomery','Morgan','Owen','Putnam','Randolph','Rush','Shelby','Tipton','Warren','Wayne','White'
];

let selectedCounties = new Set();

function initCountyPicker() {
  renderCountyList('');
}

function renderCountyList(search) {
  const list = document.getElementById('ci-county-list');
  if (!list) return;
  const q = search.toLowerCase();
  const filtered = IN_COUNTIES.filter(c => !q || c.name.toLowerCase().includes(q));

  const dmaPop = IN_COUNTIES.filter(c => INDY_DMA_COUNTIES.includes(c.name)).reduce((s,c) => s+c.pop, 0);
  const dmaActive = INDY_DMA_COUNTIES.every(n => selectedCounties.has(n));
  const dmaPreset = !q ? `
    <div class="county-preset ${dmaActive ? 'active' : ''}" onclick="selectDMA()">
      <span class="county-preset-label">&#128507; Indianapolis DMA <span class="county-preset-badge">34 counties</span></span>
      <span class="county-preset-pop">${dmaPop.toLocaleString('en-US')}</span>
    </div>
    <div class="county-divider">All Counties</div>
  ` : '';

  list.innerHTML = dmaPreset + (filtered.map(c => `
    <label class="county-item ${selectedCounties.has(c.name) ? 'selected' : ''}">
      <input type="checkbox" value="${c.name}" ${selectedCounties.has(c.name) ? 'checked' : ''}
        onchange="toggleCounty('${c.name}', this.checked)" />
      <span class="county-item-name">${c.name}</span>
      <span class="county-item-pop">${c.pop.toLocaleString('en-US')}</span>
    </label>
  `).join('') || '<div style="color:var(--text-muted);padding:8px;font-size:12px;">No counties match.</div>');
}

function selectDMA() {
  const allSelected = INDY_DMA_COUNTIES.every(n => selectedCounties.has(n));
  if (allSelected) {
    // Deselect all DMA counties
    INDY_DMA_COUNTIES.forEach(n => selectedCounties.delete(n));
  } else {
    // Select all DMA counties
    INDY_DMA_COUNTIES.forEach(n => selectedCounties.add(n));
  }
  updateCountyAudience();
  renderCountyList(document.getElementById('ci-county-search').value);
}

function filterCounties() {
  const q = document.getElementById('ci-county-search').value;
  renderCountyList(q);
}

function toggleCounty(name, checked) {
  if (checked) selectedCounties.add(name);
  else selectedCounties.delete(name);
  updateCountyAudience();
  renderCountyList(document.getElementById('ci-county-search').value);
}

function clearCounties() {
  selectedCounties.clear();
  document.getElementById('ci-audience').value = '';
  document.getElementById('ci-county-search').value = '';
  updateCountySummary(0);
  renderCountyList('');
  calcImpact();
}

function updateCountyAudience() {
  const total = IN_COUNTIES
    .filter(c => selectedCounties.has(c.name))
    .reduce((sum, c) => sum + c.pop, 0);
  if (total > 0) {
    document.getElementById('ci-audience').value = total;
  } else {
    document.getElementById('ci-audience').value = '';
  }
  updateCountySummary(total);
  calcImpact();
}

function updateCountySummary(total) {
  const summary = document.getElementById('ci-county-summary');
  if (!summary) return;
  if (selectedCounties.size === 0) {
    summary.style.display = 'none';
    return;
  }
  summary.style.display = 'block';
  const names = [...selectedCounties].sort().join(', ');
  summary.innerHTML = `<strong>${selectedCounties.size} ${selectedCounties.size === 1 ? 'county' : 'counties'} selected:</strong> ${names} &mdash; <strong>${total.toLocaleString('en-US')}</strong> people`;
}

// Init county picker when Campaign Impact tab opens
document.querySelector('[data-tab="impact"]').addEventListener('click', () => {
  setTimeout(() => { initGauge(); initCountyPicker(); }, 50);
});

// ── UTM BUILDER ───────────────────────────────────────────────────────

// Load QR library dynamically when UTM tab first opens
let qrLibLoaded = false;
let currentUtmUrl = '';

document.querySelector('[data-tab="utm"]').addEventListener('click', () => {
  if (!qrLibLoaded) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.onload = () => { qrLibLoaded = true; };
    document.head.appendChild(script);
  }

  // Show/hide custom inputs on source/medium change
  document.getElementById('utm-source').addEventListener('change', function() {
    document.getElementById('utm-source-custom').style.display =
      this.value === 'custom' ? 'block' : 'none';
    buildUtm();
  });
  document.getElementById('utm-medium').addEventListener('change', function() {
    document.getElementById('utm-medium-custom').style.display =
      this.value === 'custom' ? 'block' : 'none';
    buildUtm();
  });
});

function formatCampaignName(name) {
  // Lowercase, spaces→underscores, strip non-alphanumeric except _ and -
  // Always prepend nexstar_ so our identifier appears in every GA4 campaign report
  const formatted = name.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_\-]/g, '');
  return formatted ? 'nexstar_' + formatted : '';
}

function getUtmSource() {
  const sel = document.getElementById('utm-source').value;
  if (sel === 'custom') return document.getElementById('utm-source-custom').value.trim().toLowerCase();
  return sel.toLowerCase();
}

function getUtmMedium() {
  const sel = document.getElementById('utm-medium').value;
  if (sel === 'custom') return document.getElementById('utm-medium-custom').value.trim().toLowerCase();
  return sel.toLowerCase();
}

function buildUtm() {
  const dest     = document.getElementById('utm-dest').value.trim();
  const source   = getUtmSource();
  const medium   = getUtmMedium();
  const campaign = document.getElementById('utm-campaign').value.trim();
  const content  = document.getElementById('utm-content').value.trim();

  const display  = document.getElementById('utm-url-display');
  const testBtn  = document.getElementById('utm-test-btn');
  const copyBtn  = document.getElementById('utm-copy-btn');
  const validation = document.getElementById('utm-validation');

  // Validate
  const errors = [];
  if (!dest) errors.push('Destination URL is required');
  else if (!dest.startsWith('http://') && !dest.startsWith('https://')) errors.push('URL must start with https://');
  if (!source) errors.push('Source is required');
  if (!medium) errors.push('Medium is required');
  if (!campaign) errors.push('Campaign Name is required');

  if (errors.length > 0) {
    display.innerHTML = `<span class="utm-url-placeholder">${errors[0]}</span>`;
    validation.innerHTML = errors.map(e => `<div class="utm-error">&#9888; ${e}</div>`).join('');
    testBtn.disabled = true;
    copyBtn.disabled = true;
    currentUtmUrl = '';
    clearQR();
    return;
  }

  validation.innerHTML = '';

  // Build URL
  const campaignFormatted = formatCampaignName(campaign);
  const base = dest.includes('?') ? dest + '&' : dest + '?';
  let params = `utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaignFormatted)}`;
  if (content.trim()) params += `&utm_content=${encodeURIComponent(content.trim().toLowerCase().replace(/\s+/g, '_'))}`;

  currentUtmUrl = base + params;

  // Display with highlighting
  const [baseUrl, queryStr] = currentUtmUrl.split('?');
  const parts = queryStr.split('&').map(p => {
    const [k, v] = p.split('=');
    return `<span class="utm-param-key">${k}</span>=<span class="utm-param-val">${decodeURIComponent(v)}</span>`;
  }).join('<span class="utm-param-sep">&amp;</span>');
  display.innerHTML = `<span class="utm-base-url">${escHtml(baseUrl)}</span><span class="utm-param-sep">?</span>${parts}`;

  testBtn.disabled = false;
  copyBtn.disabled = false;

  // Generate QR
  generateQR(currentUtmUrl);
}

function generateQR(url) {
  const canvas = document.getElementById('utm-qr-canvas');
  const placeholder = document.getElementById('utm-qr-placeholder');
  const actions = document.getElementById('utm-qr-actions');

  if (!url) { clearQR(); return; }

  // Use QRCode.js if loaded, otherwise use Google Charts API as fallback
  if (typeof QRCode !== 'undefined') {
    // Clear previous
    canvas.style.display = 'none';
    // Use an img element approach via QRCode lib
    const container = document.getElementById('utm-qr-canvas').parentNode;
    let qrImg = document.getElementById('utm-qr-img');
    if (!qrImg) {
      qrImg = document.createElement('div');
      qrImg.id = 'utm-qr-img';
      container.insertBefore(qrImg, canvas);
    }
    qrImg.innerHTML = '';
    new QRCode(qrImg, {
      text: url,
      width: 180,
      height: 180,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
    // Also render a high-res version for download
    let qrHiRes = document.getElementById('utm-qr-hires');
    if (!qrHiRes) {
      qrHiRes = document.createElement('div');
      qrHiRes.id = 'utm-qr-hires';
      qrHiRes.style.cssText = 'position:absolute;left:-9999px;top:-9999px;';
      document.body.appendChild(qrHiRes);
    }
    qrHiRes.innerHTML = '';
    new QRCode(qrHiRes, {
      text: url,
      width: 980,
      height: 980,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
    placeholder.style.display = 'none';
    actions.style.display = 'flex';
  } else {
    // Fallback: Google Charts QR API via img tag
    const size = 500;
    const src = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(url)}&choe=UTF-8`;
    placeholder.style.display = 'none';
    canvas.style.display = 'none';
    let qrImg = document.getElementById('utm-qr-img');
    if (!qrImg) {
      qrImg = document.createElement('div');
      qrImg.id = 'utm-qr-img';
      canvas.parentNode.insertBefore(qrImg, canvas);
    }
    qrImg.innerHTML = `<img src="${src}" width="200" height="200" style="border-radius:8px;" crossorigin="anonymous" id="utm-qr-google-img" />`;
    actions.style.display = 'flex';
  }
}

function clearQR() {
  document.getElementById('utm-qr-placeholder').style.display = 'flex';
  document.getElementById('utm-qr-canvas').style.display = 'none';
  document.getElementById('utm-qr-actions').style.display = 'none';
  const qrImg = document.getElementById('utm-qr-img');
  if (qrImg) qrImg.innerHTML = '';
}

function utmTest() {
  if (currentUtmUrl) window.open(currentUtmUrl, '_blank');
}

function utmCopy() {
  if (!currentUtmUrl) return;
  // Save to shared localStorage history
  let savedHistory = JSON.parse(localStorage.getItem('utmHistory') || '[]');
  if (!savedHistory.find(h => h.url === currentUtmUrl)) {
    savedHistory.unshift({
      url: currentUtmUrl,
      label: document.getElementById('utm-campaign').value.trim(),
      source: document.getElementById('utm-source').value,
      medium: document.getElementById('utm-medium').value,
      time: new Date().toLocaleString(),
      ts: Date.now()
    });
    if (savedHistory.length > 50) savedHistory.pop();
    localStorage.setItem('utmHistory', JSON.stringify(savedHistory));
  }
  navigator.clipboard.writeText(currentUtmUrl).then(() => {
    toast('URL copied to clipboard — saved to history');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = currentUtmUrl;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    toast('URL copied to clipboard');
  });
}

function utmDownloadQR() {
  // Try hi-res canvas from QRCode.js (1000x1000)
  const qrHiRes = document.getElementById('utm-qr-hires');
  if (qrHiRes) {
    const hiCanvas = qrHiRes.querySelector('canvas');
    if (hiCanvas) {
      // Composite: white 1000x1000 canvas, QR centered with 10px quiet zone
      const out = document.createElement('canvas');
      out.width = 1000; out.height = 1000;
      const ctx = out.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 1000, 1000);
      ctx.drawImage(hiCanvas, 10, 10, 980, 980);
      const a = document.createElement('a');
      a.download = 'utm-qr-code.png';
      a.href = out.toDataURL('image/png');
      a.click();
      return;
    }
  }

  // Fallback: display canvas
  const qrImg = document.getElementById('utm-qr-img');
  if (qrImg) {
    const canvas = qrImg.querySelector('canvas');
    if (canvas) {
      const a = document.createElement('a');
      a.download = 'utm-qr-code.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
      return;
    }
  }

  // Fallback: draw Google Charts img to canvas and download
  const img = document.getElementById('utm-qr-google-img');
  if (img) {
    const c = document.createElement('canvas');
    c.width = 500; c.height = 500;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, 500, 500);
    const a = document.createElement('a');
    a.download = 'utm-qr-code.png';
    a.href = c.toDataURL('image/png');
    a.click();
  }
}

function utmReset() {
  ['utm-dest','utm-campaign','utm-content'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('utm-source').value = '';
  document.getElementById('utm-medium').value = '';
  document.getElementById('utm-source-custom').style.display = 'none';
  document.getElementById('utm-medium-custom').style.display = 'none';
  document.getElementById('utm-url-display').innerHTML = '<span class="utm-url-placeholder">Fill in the required fields to generate your URL</span>';
  document.getElementById('utm-validation').innerHTML = '';
  document.getElementById('utm-test-btn').disabled = true;
  document.getElementById('utm-copy-btn').disabled = true;
  currentUtmUrl = '';
  clearQR();
}


