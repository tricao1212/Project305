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
                return BadRequest(res);

            return Ok(users);
        }

        [HttpGet]
        [Route("Id", Name = "GetAccountById")]
        public async Task<IActionResult> GetAccountById(int Id)
        {
            var res = await _accountService.GetById(Id);

            if (res.IsSuccess is false)
                return BadRequest(res);

            return Ok(res);
        }

        [HttpPost]
        [Route("Add", Name = "CreateAccount")]
        public async Task<IActionResult> CreateAccount(Account account)
        {
            var res = await _accountService.CreateAsync(account);

            if (res.IsSuccess is false)
                return BadRequest(res);

            return Ok(res);
        }
    }
}
