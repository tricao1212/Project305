using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project305.Data;
using Project305.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterFormsController : ControllerBase
    {
        private readonly Project305Context _context;

        public RegisterFormsController(Project305Context context)
        {
            _context = context;
        }

        // GET: api/RegisterForms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RegisterForm>>> GetRegisterForm()
        {
            return await _context.RegisterForm.ToListAsync();
        }

        // GET: api/RegisterForms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RegisterForm>> GetRegisterForm(int id)
        {
            var registerForm = await _context.RegisterForm.FindAsync(id);

            if (registerForm == null)
            {
                return NotFound();
            }

            return registerForm;
        }

        // PUT: api/RegisterForms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegisterForm(int id, RegisterForm registerForm)
        {
            if (id != registerForm.Id)
            {
                return BadRequest();
            }

            _context.Entry(registerForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterFormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RegisterForms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RegisterForm>> PostRegisterForm(RegisterForm registerForm)
        {
            _context.RegisterForm.Add(registerForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegisterForm", new { id = registerForm.Id }, registerForm);
        }

        // DELETE: api/RegisterForms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRegisterForm(int id)
        {
            var registerForm = await _context.RegisterForm.FindAsync(id);
            if (registerForm == null)
            {
                return NotFound();
            }

            _context.RegisterForm.Remove(registerForm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegisterFormExists(int id)
        {
            return _context.RegisterForm.Any(e => e.Id == id);
        }
    }
}
