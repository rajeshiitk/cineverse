import React, { useEffect, useState } from 'react';
import "./search.scss"
import { useParams } from 'react-router-dom';
import fetchDataFromApi from '../../utils/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../genrePage/movieCard/MovieCard';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();


  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${page}`).then(
      (res) => {
        setData(res);
        setPage((prev) => prev + 1);
        setLoading(false);
      }
    )

  }

  const fetchNextPageData = () => {
    console.log("next time")
    fetchDataFromApi(`/search/multi?query=${query}&page=${page}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPage((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPage(1);
    fetchInitialData();
    // fetchNextPageData();
    // fetchNextPageData();
  }, [query]);


  return (
    <div className="searchPage">
      {!loading && (
        <div>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${data?.total_results > 1
                    ? "results"
                    : "result"
                  } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={true || page <= data?.total_pages}
                loader={<h1>Loading</h1>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard
                      key={index}
                      poster={item.poster_path}
                      name={item.original_title || item.name}
                      id={item.id}
                    />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">
              Sorry, Results not found!
            </span>
          )}
        </div>
      )}
    </div>
  );

}

export default SearchPage;