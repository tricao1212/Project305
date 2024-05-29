using Microsoft.AspNetCore.Mvc;
using Project305.Business.AccountService;
using Project305.Domain.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        [Route("All", Name = "GetAllAccounts")]
        public async Task<IActionResult> GetAllAccounts()
        {
            var res = await _accountService.GetAll();
            var users = new List<Account>(res.Data);
            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(users);
        }

        [HttpGet]
        [Route("Id", Name = "GetAccountById")]
        public async Task<IActionResult> GetAccountById(int Id)
        {
            var res = await _accountService.GetById(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccount(Account account)
        {
            var res = await _accountService.CreateAsync(account);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        [Route("Auth", Name = "Login")]
        public async Task<IActionResult> Auth(String Email, String Password)
        {
            var res = await _accountService.Auth(Email, Password);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpDelete]
        [Route("Delete", Name = "DeleteAccount")]
        public async Task<IActionResult> DeleteAccount(int Id)
        {
            var res = await _accountService.DeleteAsync(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }
    }
}
