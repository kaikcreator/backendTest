# backend v0.0.0



- [Campaigns](#campaigns)
	- [Retrieve single campaign](#retrieve-single-campaign)
	- [Retrieve campaigns](#retrieve-campaigns)
	


# Campaigns

## Retrieve single campaign



	GET /campaigns/:id


## Retrieve campaigns



	GET /campaigns


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|


