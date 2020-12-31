const searchHelper = (searchKey, query, req) => {
  if (req.query.search) {
    const searchObject = {};

    const regex = new RegExp(req.query.search, "i");

    searchObject[searchKey] = regex;
    return (query = query.where(searchObject));
  }

  return query;
};

const populateHelper = (query, population) => {
  //console.log(query);
  return query.populate(population);
};

const sortHelper = (query, req) => {
  // sorting req.query.sortBy
  const sortKey = req.query.sortBy;
  if (sortKey === "most-liked") {
    return (query = query.sort("-likeCount"));
  } else if (sortKey === "most-claps") {
    return (query = query.sort("-claps"));
  }
  return (query = query.sort("-createdAt"));
};

const paginationHelper = async (totalDocuments, query, req) => {
  //paginate
  const total = totalDocuments;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit; // end page
  const pagination = {};

  if (startIndex > 0) {
    pagination.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit: limit,
    };
  }
  return {
    query:
      query === undefined ? undefined : query.skip(startIndex).limit(limit),
    pagination: pagination,
    startIndex,
    limit,
  };
};

module.exports = {
  searchHelper,
  populateHelper,
  sortHelper,
  paginationHelper,
};
