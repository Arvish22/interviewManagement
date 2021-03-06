package com.interview.core.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of CandidateSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class CandidateSearchRepositoryMockConfiguration {

    @MockBean
    private CandidateSearchRepository mockCandidateSearchRepository;

}
