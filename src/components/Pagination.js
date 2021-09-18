import React from 'react'
import styled from 'styled-components'

const PaginationStyles = styled.div`
  margin: 2rem 0;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    &[aria-current],
    &[disabled] {
      pointer-events: none;
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  changePage,
}) {
  const totalPages = Math.ceil(totalCount / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1

  return (
    <PaginationStyles>
      <button
        className="button"
        disabled={!hasPrevPage}
        onClick={() => changePage((v) => v - 1)}
      >
        ←{' '}
        <span title="Previous Page" className="word">
          Prev
        </span>
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          disabled={i + 1 === currentPage}
          className={`button ${currentPage === 1 && i === 0 ? 'current' : ''}`}
          key={`pages${i}`}
          onClick={() => changePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="button"
        disabled={!hasNextPage}
        onClick={() => changePage((v) => v + 1)}
      >
        <span title="Next Page" className="word">
          Next
        </span>{' '}
        →
      </button>
    </PaginationStyles>
  )
}
