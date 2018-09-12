
export const testCreatives = {
  'header': 'Tired of doing DevOps?',
  'header_1': 'This is header 1',
  'header_2': 'This is header 2',
  'description': 'Let us our smart AI DevOps Assistant help you!',
  'url': 'https://example.io',
  'image': 'img4.jpg'
};

export const testInsights = {
  'impressions': 8293,
  'clicks': 453,
  'website_visits': 100,
  'nanos_score': 2.9,
  'cost_per_click': 2.88,
  'click_through_rate': 0.003,
  'advanced_kpi_1': 39.7,
  'advanced_kpi_2': 0.035
};

export const testTargetAudience = {
  'languages': ['EN'],
  'genders': ['M', 'F'],
  'age_range': [20, 45],
  'locations': [
    'Switzerland'
  ],
  'interests': [
    'Docker',
    'Kubernates',
    'DevOps',
    'AWS',
    'Google Cloud Platform',
    'Ubuntu'
  ],
  'keywords': [
    'keyword 1',
    'keyword 2'
  ]
};

export const testPlatform = {
  'status': 'Ended',
  'total_budget': 180,
  'remaining_budget': 12,
  'start_date': 1513724400000,
  'end_date': 1514674800000,
  'target_audiance': testTargetAudience,
  'creatives': testCreatives,
  'insights': testInsights
};

export const testCampaign = {
  'id': 100000002,
  'name': 'Test Ad 2',
  'goal': 'Raise Awareness',
  'total_budget': 360,
  'status': 'Ended',
  'platforms': {
    'facebook': testPlatform
  }
};

export function compareFullCampaign (campaign) {
  // test full campaign (general info)
  expect(campaign._id).toEqual(testCampaign.id);
  expect(campaign.name).toEqual(testCampaign.name);
  expect(campaign.goal).toEqual(testCampaign.goal);
  expect(campaign.totalBudget).toEqual(testCampaign.total_budget);
  expect(campaign.status).toEqual(testCampaign.status);
  // test full campaign (platform info)
  expect(campaign.platforms.facebook).toBeDefined();
  const platform = campaign.platforms.facebook;
  expect(platform.status).toEqual(testPlatform.status);
  expect(platform.totalBudget).toEqual(testPlatform.total_budget);
  expect(platform.remainingBudget).toEqual(testPlatform.remaining_budget);
  expect(new Date(platform.startDate).getTime()).toEqual(testPlatform.start_date);
  expect(new Date(platform.endDate).getTime()).toEqual(testPlatform.end_date);
  // test full campaign (platform target audience info)
  expect(platform.targetAudiance.languages).toEqual(testTargetAudience.languages);
  expect(platform.targetAudiance.genders).toEqual(testTargetAudience.genders);
  expect(platform.targetAudiance.age.min).toEqual(testTargetAudience.age_range[0]);
  expect(platform.targetAudiance.age.max).toEqual(testTargetAudience.age_range[1]);
  expect(platform.targetAudiance.location).toEqual(testTargetAudience.location);
  expect(platform.targetAudiance.interests).toEqual(testTargetAudience.interests);
  expect(platform.targetAudiance.keywords).toEqual(testTargetAudience.keywords);
  // test full campaign (platform creatives info)
  expect(platform.creatives.header).toEqual(testCreatives.header);
  expect(platform.creatives.header_1).toEqual(testCreatives.header_1);
  expect(platform.creatives.header_2).toEqual(testCreatives.header_2);
  expect(platform.creatives.description).toEqual(testCreatives.description);
  expect(platform.creatives.url).toEqual(testCreatives.url);
  expect(platform.creatives.image).toEqual(testCreatives.image);
  // test full campaign (platform insights info)
  expect(platform.insights.impressions).toEqual(testInsights.impressions);
  expect(platform.insights.clicks).toEqual(testInsights.clicks);
  expect(platform.insights.websiteVisits).toEqual(testInsights.website_visits);
  expect(platform.insights.nanosScore).toEqual(testInsights.nanos_score);
  expect(platform.insights.costPerClick).toEqual(testInsights.cost_per_click);
  expect(platform.insights.clickThroughRate).toEqual(testInsights.click_through_rate);
  expect(platform.insights.advancedKpi_1).toEqual(testInsights.advanced_kpi_1);
  expect(platform.insights.advancedKpi_2).toEqual(testInsights.advanced_kpi_2);
}
