var searchIndex = JSON.parse('{\
"tdameritradeclient":{"doc":"tdameritradeclient","i":[[3,"TDAClient","tdameritradeclient","TDA Client",null,null],[4,"Account","","",null,null],[13,"Positions","","",0,null],[13,"Orders","","",0,null],[13,"PositionsAndOrders","","",0,null],[4,"OptionChain","","",null,null],[13,"ContractType","","Type of contracts to return in the chain. Can be CALL,…",1,null],[13,"StrikeCount","","The number of strikes to return above and below the…",1,null],[13,"Strategy","","Passing a value returns a Strategy Chain. Possible values…",1,null],[13,"Interval","","Strike interval for spread strategy chains (see strategy…",1,null],[13,"Strike","","Provide a strike price to return options only at that…",1,null],[13,"IncludeQuotes","","Include quotes for options in the option chain. Can be…",1,null],[13,"Range","","Returns options for the given range. Possible values are:…",1,null],[13,"FromDate","","Only return expirations after this date. For strategies,…",1,null],[13,"ToDate","","Only return expirations before this date. For strategies,…",1,null],[13,"Volatility","","Volatility to use in calculations. Applies only to…",1,null],[13,"UnderlyingPrice","","Underlying price to use in calculations. Applies only to…",1,null],[13,"InterestRate","","Interest rate to use in calculations. Applies only to…",1,null],[13,"DaysToExpiration","","Days to expiration to use in calculations. Applies only to…",1,null],[13,"ExpireMonth","","\'Return only options expiring in the specified month.…",1,null],[13,"OptionType","","Type of contracts to return. Possible values are: S:…",1,null],[4,"History","","",null,null],[13,"PeriodType","","",2,null],[13,"Period","","",2,null],[13,"FrequencyType","","",2,null],[13,"Frequency","","",2,null],[13,"StartDate","","",2,null],[13,"EndDate","","",2,null],[13,"NeedExendedHoursData","","",2,null],[4,"Order","","",null,null],[13,"MaxResults","","Max number of orders to retrieve",3,null],[13,"FromEnteredTime","","Specifies that no orders entered before this time should…",3,null],[13,"ToEnteredTime","","Specifies that no orders entered after this time should be…",3,null],[13,"Status","","specifies type of orders to be returned: WORKING, FILLED,…",3,null],[11,"new","","Create new bsae client that maintains Authorization Header…",4,[[["string",3]],["tdaclient",3]]],[11,"new_usingrefresh","","Create new base client that maintains Authorization Header…",4,[[],["tdaclient",3]]],[11,"new_usingcode","","Create new base client that maintains Authorization Header…",4,[[],["tdaclient",3]]],[11,"getuserprincipals","","get /userprincipals",4,[[]]],[11,"getquotes","","get /marketdata/quotes?symbol=SYM1,SYM2,SYM3....",4,[[]]],[11,"gethistory","","get /marketdata/{SYM}/pricehistory additional query…",4,[[]]],[11,"getoptionchain","","get /marketdata/chains?symbol=SYM additional query…",4,[[]]],[11,"getaccounts","","get /accounts if there are more than one account linked…",4,[[]]],[11,"getaccount","","get /accounts/{account} grabs one account with…",4,[[]]],[11,"getorders","","get /accounts/{account}/orders retrieve all working orders",4,[[]]],[11,"createorder","","Post /accounts/{account}/orders with JSON formated body…",4,[[],["string",3]]],[11,"deleteorder","","Delete /accounts/{account}/orders/{order} Creates a…",4,[[],["string",3]]],[11,"replaceorder","","PUT /accounts/{account}/orders/{order} with JSON formated…",4,[[],["string",3]]],[0,"auth","","",null,null],[3,"TDauth","tdameritradeclient::auth","TDauth",null,null],[5,"gettoken_fromrefresh","","used to get a valid `token` from `refresh_token` and…",null,[[],["string",3]]],[5,"getrefresh_fromrefresh","","used to get a valid `refresh` from `refresh_token` and…",null,[[],["string",3]]],[5,"gettoken_fromcode","","used to get a valid `token` and `refresh_token` from…",null,[[],["string",3]]],[5,"getcodeweblink","","used to get code manually from tdameritrade website with…",null,[[],["string",3]]],[11,"new_fromrefresh","","create new `TDauth` with `refresh_token` and `clientid` if…",5,[[],["tdauth",3]]],[11,"new_fromcode","","create new `TDauth` with `code`, `redirecturi` and…",5,[[],["tdauth",3]]],[11,"resolve_token_fromrefresh","","get /oauth2/token token endpoint returns an access token…",5,[[],["string",3]]],[11,"resolve_token_fromcode","","get /oauth2/token token endpoint returns an access token…",5,[[],["string",3]]],[11,"gettokens","","",5,[[]]],[11,"from","tdameritradeclient","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","tdameritradeclient::auth","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"fmt","tdameritradeclient","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","tdameritradeclient::auth","",5,[[["formatter",3]],["result",6]]]],"p":[[4,"Account"],[4,"OptionChain"],[4,"History"],[4,"Order"],[3,"TDAClient"],[3,"TDauth"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);