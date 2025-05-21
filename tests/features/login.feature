Feature: Login Functionality
  @Login
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid "<username>" and password and clicks the login button
    Then the user should be redirected to the products page

    Examples:
      | username        |
      | standard_user   |

  @Login
  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters an invalid username and password and clicks the login button
    Then the user should see an error message
    And the user should remain on the login page